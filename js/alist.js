const AList = function() {
  let array = [];

  this.init = function (arr) {
       if (arr === undefined ) {
           array.length = null;
       } else {
           for (let i = 0; i < arr.length; i++) {
               array[i] = arr[i];
           }
       }
       return array;
  };

  this.toString = () => {
        let response = '[';
        for (let i = 0; i < array.length; i++) {
            response += `${array[i]}, `;
        }
        if (array.length !== 0) {
            response = response.slice(0, -2);
        }
        response +=']';
        return response;
  };

  this.getSize = () => {
    if(array.length === 0){
        return null;
    }  else {
        return array.length;
    }
  };

  this.push = (element) => {
      array[array.length] = element;
      return this.getSize();
  };

  this.pop = () => {
      if (array.length === 0) {
          return undefined;
      } else {
          let element = array[array.length - 1];
          array.length = array.length-1;
          return element;
      }
  };

  this.shift = (element) => {
      if (array.length === 0) {
          array[array.length] = element;
          return this.getSize();
      } else {
         for (let i = array.length-1; i >= 0; i--) {
             array[i+1] = array[i];
         }
         array[0] = element;
         return this.getSize();
      }
  };

  this.unshift = () => {
      if (array.length === 0) {
          return undefined;
      } else {
          let element = array[0];
          for (let i = 0; i < array.length-1; i++) {
              array[i] = array[i+1];
          }
          array.length = array.length-1;
          return element;
      }
  };

  this.sort = () => {
      if (!array.length) {
          return -1;
      }

      let sortArray = new AList();
      sortArray = array;

      let i = (sortArray.length / 2).toFixed(); // toFixed округление

      while (i > 0) {
          for (let j = 0; j < sortArray.length; j++) {
              let k = j, t = sortArray[j];

              while (k >= i && sortArray[k-i] > t) {
                  sortArray[k] = sortArray[k-i];
                  k -= i;
              }
              sortArray[k] = t;
          }

          i = (i == 2) ? 1 : ~~(i * 5 / 11);
      }

      return sortArray;
  };

  this.set = (index, element) => {
      if (array.length < index) {
          for (let i = array.length; i < index; i++) {
              array[i] = '';
          }
          array[index] = element;
      } else {
          array[index] = element;
      }

      return array;
  };

  this.get = (index) => {
      if (array.length === null || array.length < index || index < 0 || index === undefined) {
          return undefined;
      } else {
          return array[index];
      }
  };

  this.slice = (begin, end) => {
      let newArray = [];
      let j = 0;

      if (!array.length || array.length < begin || begin < 0 || end < 0 || end < begin) {
          return undefined;
      } else if (array.length > begin && end === undefined) {
          for (let i = begin; i < array.length; i++){
              newArray[j] = array[i];
              ++ j;
          }
          return newArray;
      } else {
          for (let i = begin; i < end; i++) {
              newArray[j] = array[i];
              ++ j;
          }
          return newArray;
      }
  };

  this.splice = function (begin, count, element)  {
      let newArray = [];
      let argument = [];

      for (let i = 2, k = 0; i < arguments.length; i++, k++) {
          argument[k] = arguments[i];
      }

      if ((array.length < begin && argument.length === 0) || begin < 0 || count < 0) {
          return undefined;
      } else if (array.length > begin && count > 0 && argument.length === 0) {
          for (let i = begin, j = 0; i < begin + count; i++, j++){
              newArray[j] = array[i];
          }
          for (let i = begin + count; i < array.length; i++) {
              array[i-count] = array[i];
          }
          array.length = array.length-count;
          return newArray;
      } else if (array.length > begin && count > 0 && argument.length > 0){
          for (let i = begin, l = 0; i < begin + count; i++, l++) {
              newArray[l] = array[i];
          }
          if (argument.length > count) {
              for (let i = array.length-1; i >= begin + count; i--) {
                  array[i + (argument.length-count)] = array[i];
              }
              for (let i = begin, l = 0; i < begin + argument.length; i++, l++) {
                  array[i] = argument[l];
              }
          } else if (argument.length < count) {
              for (let i = begin + count; i < array.length; i++) {
                  array[i - count + argument.length] = array[i];
              }
              for (let i = begin, l = 0; i < begin + argument.length; i++, l++) {
                  array[i] = argument[l];
              }
              array.length = array.length - count + argument.length;
          } else {
              for (let i = begin, l = 0; i < begin + argument.length; i++, l++) {
                  array[i] = argument[l];
              }
          }
          return newArray;
      } else if (array.length < begin && argument.length > 0) {
          for (let i = array.length; i < begin; i++) {
              array[i] = '';
          }
          for (let i = begin, l = 0; i < begin + argument.length; i++, l++) {
              array[i] = argument[l];
          }
          return undefined;
      }
  };
};