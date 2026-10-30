# mynextsteps.cc

Landing page for Next Steps Community Center, a ministry of Granger Community Church. People arrive by scanning the QR code on a postcard inviting Mishawaka neighbors to join surveys, neighborhood gatherings and focus groups.

The site is served by GitHub Pages from the root of `main` at https://mynextsteps.cc.

## Editing

The page is `index.html`. Both logos are embedded in it; the building sketch background is in `assets/`, and the favicons sit at the root. Edit and commit to `main`; Pages redeploys in a minute or two.

Keep to the Granger brand tokens already in the file (navy #092c4c, green #abd424, page #efefef) and the Granger Playbook copy style: phone numbers with periods, no comma before "and" in lists, lowercase web addresses and "Next Steps Community Center" in full.

## Form

The sign-up form is a MinistryPlatform Custom Form widget (`<mpp-custom-form>`, form GUID `0ded7757-68e7-414f-b9f5-e50b395996b5`), loaded by `MPWidgets.js` from my.grangerchurch.com. Fields, labels and the button text are edited in MP, not here.

The widget renders inside a shadow root, so page CSS cannot style it. Its styling lives in `mp-form.css`, which the widget loads through its `customcss` attribute.

MP only answers pages whose origin is on its Permitted URLs list. To preview locally, serve the folder on a permitted port, for example `python3 -m http.server 3010` and open http://localhost:3010 (http://127.0.0.1:5500 is also permitted).
