# mynextsteps.cc

Landing page for Next Steps Community Center, a ministry of Granger Community Church. People arrive by scanning the QR code on a postcard inviting Mishawaka neighbors to join surveys, neighborhood gatherings and focus groups.

The site is served by GitHub Pages from the root of `main` at https://mynextsteps.cc.

## Editing

The page is `index.html`. Both logos are embedded in it; the building sketch background is in `assets/`, and the favicons sit at the root. Edit and commit to `main`; Pages redeploys in a minute or two.

Keep to the Granger brand tokens already in the file (navy #092c4c, green #abd424, page #efefef) and the Granger Playbook copy style: phone numbers with periods, no comma before "and" in lists, lowercase web addresses and "Next Steps Community Center" in full.

## Form

The sign-up form is a MinistryPlatform Subscribe to Publication widget (`<mpp-subscribe-to-publication>`, publication 23, "Next Steps Community Center Neighbors"), loaded by `MPWidgets.js` from my.grangerchurch.com. It asks for first name, last name, email and mobile phone; those fields are fixed by MP.

Signing up is double opt-in. MP sends the email template set in `verificationemailtemplateid`, and that email's `[mpp_verify_email_url]` link brings the person back to `returnurl` (https://mynextsteps.cc/) with `?mpp-verify-id=...`. The widget on the page then completes the subscription and shows a confirmation.

The widget renders inside a shadow root, so page CSS cannot style it. Its styling lives in `mp-form.css`, which the widget loads through its `customcss` attribute. An inline script after the widget relabels the button to "Join the conversation".

MP only answers pages whose origin is on its Permitted URLs list. To preview locally, serve the folder on a permitted port, for example `python3 -m http.server 3010` and open http://localhost:3010 (http://127.0.0.1:5500 is also permitted).
