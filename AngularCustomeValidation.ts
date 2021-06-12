/**
 * @ngdoc method
 * @name fileSizeLimit
 * @description
 * check file size 2 MB validation
 * @returns void
*/
  fileSizeLimit(control: FormControl) {
    const maxFileSize = 2048;
    const file = control.value;
    if (file) {
      const fileSize = file.size;
      const fileSizeInKB = Math.round(fileSize / 1024);
      if (fileSizeInKB > maxFileSize) {
        return { 'invalidSize': true };
      }
      return null;
    }
  }
/**
 * @ngdoc method
 * @name fileFormats
 * @description
 * file formats validation
 * @returns void
*/
  fileFormats(control: FormControl) {
    const file = control.value;
    if (file) {
      if (file.type.split("/")[1] == 'jpeg' || file.type.split("/")[1] == 'jpg' || file.type.split("/")[1] == 'png' || file.type.split("/")[1] == 'bmp') {
        return null;
      } else {
        return { 'invalidType': true };
      }
    }
  }