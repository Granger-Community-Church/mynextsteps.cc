# mynextsteps.cc

Landing page for Next Steps Community Center, a ministry of Granger Community Church. People arrive by scanning the QR code on a postcard inviting Mishawaka neighbors to join surveys, neighborhood gatherings and focus groups.

The site is served by GitHub Pages from the root of `main` at https://mynextsteps.cc.

## Editing

There are two pages: the sign-up page `index.html` and the About page `about/index.html` (served at /about/). Both share `site.css`, and the header nav links them. The logos and the building sketch background are in `assets/`, and the favicons sit at the root. The About page uses root-relative paths (`/site.css`), so preview it through a local server, not by opening the file. Edit and commit to `main`; Pages redeploys in a minute or two.

The About page copy is adapted from the draft "Next Steps Community Center" page on grangerchurch.com (Webflow page `6a95c6a4eb990b8287686f79`). Keep the two in step when either changes.

Keep to the Granger brand tokens already in the file (navy #092c4c, green #abd424, page #efefef) and the Granger Playbook copy style: phone numbers with periods, no comma before "and" in lists, lowercase web addresses and "Next Steps Community Center" in full.

## Analytics

Google Analytics 4 (property "mynextsteps.cc", measurement ID `G-WCEFF0R14N`) is set up in `analytics.js`, which every page loads in its `<head>`. It only sends data from mynextsteps.cc itself; on localhost it logs each call to the browser console instead.

- `sign_up_email_sent`: the form was submitted and MP sent the verification email.
- `sign_up`: the person came back through the email link and is now subscribed. Mark this one as a key event in GA.

The verification link's `mpp-verify-id` token contains the person's name and email, so `analytics.js` strips it from the page URL and referrer before anything goes to GA. No form values are sent.

The QR code on the mailer goes through bitly (`granger.church/nexthello`). Put UTM tags on the bitly destination so scans show up as their own source.

## Form

The sign-up form is a MinistryPlatform Subscribe to Publication widget (`<mpp-subscribe-to-publication>`, publication 23, "Next Steps Community Center Neighbors"), loaded by `MPWidgets.js` from my.grangerchurch.com. It asks for first name, last name, email and mobile phone; those fields are fixed by MP.

Signing up is double opt-in. MP sends the email template set in `verificationemailtemplateid`, and that email's `[mpp_verify_email_url]` link brings the person back to `returnurl` (https://mynextsteps.cc/) with `?mpp-verify-id=...`. The widget on the page then completes the subscription and shows a confirmation.

The widget renders inside a shadow root, so page CSS cannot style it. Its styling lives in `mp-form.css`, which the widget loads through its `customcss` attribute. An inline script after the widget relabels the button to "Join the conversation".

MP only answers pages whose origin is on its Permitted URLs list. To preview locally, serve the folder on a permitted port, for example `python3 -m http.server 3010` and open http://localhost:3010 (http://127.0.0.1:5500 is also permitted).
