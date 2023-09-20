# Cushon ISA Investment Test

I've hosted the [latest build here](https://cushon-test-app.s3.eu-west-2.amazonaws.com/index.html) if you just want to
have a play around with the final output. If not, the instructions below will have the app up and running locally
in no time.

The app simulates a couple of network requests (fetching available funds and previous investments). When you confirm
an investment it will be stored in local storage, this data is then used later when returning to the application to
preload the redux store with your old investments without loosing them (no server). If you want to start from a clean
state after playing with the app for a whilte you can just clear the `investments` key in local storage and hit refresh.

The application is split into two sections, left hand side will show your investments (total and each individual investment)
and over on the right is the fund explorer. You can search by name, once you've picked a fund simply select the view more
details button on the chosen fund to show the investment modal. After confirming an investment you should see the overview
update with the new investment recorded.

![preview](https://github.com/hendore/cushon-test/raw/master/docs/cushon-preview.png)

## Cloning and Installing Deps

```sh
git clone git@github.com:hendore/cushon-test.git
cd cushon-test
npm install
```

## Running

The application uses vite to launch a dev server and build production releases. To launch
the dev server just run `npm run start`.

## Tests

I've added a few `uvu` tests around the logic of the application (reducers). To run the
tests you can use the npm alias/script `npm run test`.
