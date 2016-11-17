echo "Android"
find ./platforms/android/src/main/assets/app -type f -name '*.js' -exec du -ck {} + | grep total$
echo "iOS"
find ./platforms/ios/nativescriptsdkexamplesng/app -type f -name '*.js' -exec du -ck {} + | grep total$