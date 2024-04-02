module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv', 
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',//mismo nivel de babel config el archivo.env
      }
    ]
     // pegar todos los plugins a utilizar
    //pugin de renimated dejarlo de ultimo para slideshow
  ]





};
