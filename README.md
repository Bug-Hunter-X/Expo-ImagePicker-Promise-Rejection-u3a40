# Expo ImagePicker Promise Rejection

This repository demonstrates a common issue with the Expo ImagePicker library and provides a solution to handle cases where the library's promise fails to resolve.

## Problem
The Expo ImagePicker API doesn't always return a response, potentially leading to application hangs or crashes. This often occurs due to network problems or camera errors. The promise returned by ImagePicker remains unresolved, causing issues.

## Solution
The solution involves using a timeout mechanism within a `Promise.race` function. This ensures that if the ImagePicker promise does not resolve within a specified time, an alternative promise (rejecting with a timeout error) is used instead. This prevents indefinite waiting and allows for appropriate error handling.

## Setup
1. Clone this repository
2. `npm install` or `yarn install`
3. Run the app using Expo Go or a similar Expo environment.

## Contributing
Feel free to contribute to this project. Any improvements or other solutions are welcome!