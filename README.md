# Gravel-Alves.com.br

This repository contains the source code and contents for my gravel-related website where I share routes and useful links from my main social media accounts.

## Getting started

1. make sure you have the latest `npm` install and configured in your system
1. run a `npm install` to restore dependencies
1. once dependencies are restored start a development server with a `npm run dev`
1. to create a production build run `npm run astro build` and copy the contents of the `dist/` folder over to a host

### Recommendations

If you are on VSCode consider using the extensions that are recommended within the [VSCode Extensions file](.vscode/extensions.json) once you open up your IDE.

### Tech Stack

This website relies on [Astro Framework](https://astro.build) and Typescript for content processing and logic. The CSS is handled by [Tailwind CSS](https://tailwindcss.com).

### CI/CD Pipeline

This project leverages GitHub Actions for CI/CD orchestration and Azure for deployments.

The CI pipeline runs on all pull-requests and can be found on [this file](.github/workflows/validate-pull-requests.yml). The CD pipeline runs only on master and can be found on [this file](.github/workflows/deploy-to-azure.yml).

This project is deployed to an [Azure Static Web App](https://azure.microsoft.com/en-us/products/app-service/static) for the sake of simplicity. Then an Azure DNS record is created to redirect from the [domain apex](https://www.gravel-alves.com.br) to the dynamics created host name. 

## Credits and acknowledgments

This project is using as its base on the [ltree](https://github.com/DBozhinovski/astro-theme-ltree) theme for Astro.
