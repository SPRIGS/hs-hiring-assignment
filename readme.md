# SPRIGS_ Hubspot developer assignment

## Goal
Implement the hubspot theme `sprigs-hs-theme` using the requirements below:

- Install Hubspot CLI & setup Local development tools
  - Read the hubspot official guide on [getting started](https://developers.hubspot.com/docs/cms/guides/getting-started) and how to set up [Local development CLI](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cli)
- Make sure the following requirements are installed on your system:
  - Node.js v. >=10
  - NPM
  - @hubspot/cli

## Setting up
Clone this repository using git clone, go inside projects directory and remove git
``` bash
# Clone the repo and unlink the git account
git clone https://github.com/SPRIGS/hs-hiring-assignment.git
cd hs-hiring-assignment
rm -rf .git
```

Install dependencies
``` bash
npm install
```

Link the current project with your SandBox portal by running
```
hs init 
```
and follow the steps there (refer to the getting started document above).
After this, if everything went well, there should be a `hubspot.config.yml` at the root of the project looking something like this
``` yml
defaultPortal: DEV
portals:
  - name: DEV
    portalId: <PORTAL-ID>
    authType: personalaccesskey
    auth:
      tokenInfo:
        accessToken: >-
          <ACCESS-TOKEN>
        expiresAt: '2022-01-19T02:41:01.599Z'
    personalAccessKey: >-
      <PERSONAL-ACCESS-KEY>
```

Upload the theme to your SandBox portal running the command
``` bash
hs upload sprigs-hs-theme sprigs-hs-theme
```

## Development

Before you begin, using the following tools will make your life much easier:
- [VS Code](https://code.visualstudio.com/)
- [HubSpot VS Code Extension](https://marketplace.visualstudio.com/items?itemName=HubSpot.hubl)

Once youre ready to start developing, you can run the command ```npm run watch``` which does two things:
- Watches for SCSS changes on theme files, and compiles them in the same directory.
- Uploads the changes to the portal (runs `hs watch sprigs-hs-theme sprigs-hs-theme` on the background)

### Assignment:
In the modules directory `/sprigs-hs-theme/modules` you will find the following modules:
- CTA banner
- Divider
- Main banner
- Media and Accordion
- Page links
- Quote highlight
- Quote
- Site footer
- Site navigation
- Text and image*
  
All the modules are empty, exept for the `text and image` one, which you can delete, or use as a reference.

Refer to the figma file sent to your email and develop the modules.

There is already a 'Home' template which has all the modules in order.

Use [BEM](http://getbem.com/introduction/) for class names.

Figure out what styling is local (isolated per module) and what goes in the global css (`/sprigs-hs-theme/css/global.scss`)