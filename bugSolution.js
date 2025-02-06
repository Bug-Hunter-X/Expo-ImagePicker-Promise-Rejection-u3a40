The solution uses `Promise.race` to handle the potential failure of the ImagePicker promise.  If the picker doesn't respond within a certain time, the race will resolve with the timeout promise. This allows for a more robust error-handling mechanism. 

```javascript
import * as ImagePicker from 'expo-image-picker';

async function pickImage() {
  try {
    let result = await Promise.race([
      ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      }),
      new Promise((_, reject) => setTimeout(() => reject(new Error('ImagePicker timed out')), 5000)), // 5-second timeout
    ]);

    if (!result.cancelled) {
      // Handle the image result
      console.log(result);
    } else {
      console.log('ImagePicker cancelled');
    }
  } catch (error) {
    console.error('ImagePicker error:', error);
    // Handle the error, e.g., display a user-friendly message
  }
}
```