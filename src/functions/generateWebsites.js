

 export function generateWebsites(firstname, lastname, email) {
  // if (firstname == "" || lastname == "") {
  //   throw 'There is a value missing!';
  // }
    // Create element with <a> tag
    const weblink = document.createElement("a");
    const csslink = document.createElement("a");

    // Create a blog object with the file content which you want to add to the file
    const webfile = new Blob(["<!DOCTYPE html><html> <head> <title>",firstname," ",lastname,"</title> <meta charset=\"utf-8\"/> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/> <link rel=\"stylesheet\" href=\"website.css\"/> </head> <body> <ul> <li><a class=\"active\" href=\"#home\"> " ,firstname," ",lastname,"</a></li><li><a href=\"#about\">About Me</a></li><li><a href=\"#education\">Education</a></li><li><a href=\"#work\">Work</a></li><li><a href=\"#languages\">Languages</a></li><li><a href=\"#socials\">Socials</a></li></ul> <div id=\"grad\" style=\"margin-left: 15%; padding: 1px 16px; height: 1000px\"> <main class=\"content-wrapper\"><div class=\"container\"> <div class=\"row\"> <div class=\"col-xs-12\"><h2 style=\"color: white;\">Hello, My Name is " , firstname, " ",lastname,".</h2><div class=\"card\" id=\"about\"> <div class=\"card-block\"> <h2>About me</h2> <div class=\"row\"> <div class=\"col-md-10\"> <p>","This is my bio","</p></div></div></div></div><div class=\"card\" id=\"education\"> <div class=\"card-block\"> <h2>Education</h2> <div class=\"row\"><div class=\"col-md-4\"><div class=\"education-experience\"><small class=\"date\">","Start Time","-","End Time","</small><h3 class=\"h5 date-title\">","Major"," - ","School Name","</h3></div></div></div></div></div><div class=\"card\"> <div class=\"card-block\"><h2>Work</h2><div class=\"work-experience\"><small class=\"date\">","Start Time","-","End Time","</small><h3 class=\"h5 date-title\">","Title"," - <a>","Company Name","</a></h3><p>","Bio","</p></div></div></div><footer id=\"socials\" class=\"footer-container white-text-container text-center\"><div class=\"container\"><div class=\"row\"> <div class=\"col-xs-12\"><p><a class=\"fa-icon fa-icon-2x\" href=\"","linkedin","\" title=\"\"> <i class=\"fa fa-Linkedin\"></i></a></p></div></div></div></footer></div></div></div></main> </div></body> <script>document.addEventListener(\"DOMContentLoaded\", function (event){scrollRevelation('.card');}); </script> <script type=\"text/javascript\" src=\"./SecondDesign.js\"></script></body></html>"], { type: 'text/plain' });

    //const cssfile = new Blob('./designs/FirstDesign.css', { type: 'text/plain' });
    // Add file content in the object URL
    weblink.href = URL.createObjectURL(webfile);
    //csslink.href = URL.createObjectURL(cssfile);
    csslink.href = './designs/FirstDesign.css';
    // Add file name
    weblink.download = "website.html";
    csslink.download = "website.css";

    // Add click event to <a> tag to save file.
    weblink.click();
    csslink.click();
    URL.revokeObjectURL(csslink.href);
    URL.revokeObjectURL(weblink.href);

    // var count = 0;
    // var zipFilename = "zipFilename.zip";
    // var urls = [
    //   weblink.href,
    //   csslink.href
    // ];
    // var zip = new JSZip();
    // urls.forEach(function(url) {
    //   JSZipUtils.getBinaryContent(url, function(err, data) {
    //   if (err) {
    //     throw err;
    //   }
    //   zip.file(url, data, {
    //     binary: true
    //   });
    //   count++;
    //   if (count == urls.length) {
    //     zip.generateAsync({
    //       type: 'blob'
    //     }).then(function(content) {
    //       saveAs(content, "website.zip");
    //     });
    //   }
    //   });
    // });
    return true;
  }
  //module.exports = generateWebsites;