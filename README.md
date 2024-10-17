# Movie Recommender

This is an Ionic App that uses
[The Movie Database (TMDb)](https://www.themoviedb.org/) to browse a list of
movies. You will need an API key in order to run this app. The server is a just
a [Deno](https://deno.com/) script that acts as a proxy to inject your API key
into the app's requests.

# Installation

Before proceeding, make sure your computer has Node.js installed.

Install the Ionic CLI with npm

```bash
npm install -g @ionic/cli
```

# Start

1. Navigate to the server code `./server/src`

2. Create a `.env` file containing your `API_KEY` like this:

```bash
API_KEY="<your-api-key>"
```

2. Start the server with

```
deno run --allow-net net_client.ts
```

3. Start the client app by navigating to `./app/src/` and running

```
ionic serve
```

## Images Attribution

This project uses images from
[The Movie Database (TMDb)](https://www.themoviedb.org/). All images are linked
directly from TMDb and are not stored in this repository. TMDb does not endorse
or certify this project.

![TMDb Logo](https://www.themoviedb.org/assets/2/v4/logos/stacked-blue-f2b4c7aa8b7f80c0c269dc2b8546acb4b164b85316c2061d82f1a6367a8f1f15.svg)
