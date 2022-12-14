export function generateWebsites(firstname, lastname, email) {
    // Create element with <a> tag
    const weblink = document.createElement("a");
    const csslink = document.createElement("a");

    // Create a blog object with the file content which you want to add to the file
    const webfile = new Blob(["<!DOCTYPE html><html><head><title>",firstname, " ", lastname,"</title></head><body><h1>Welcome to ",firstname, " ", lastname,"'s webpage</h1><p>Hello, this is my first webpage!</p></body></html>"], { type: 'text/plain' });

    const cssfile = new Blob(["<!DOCTYPE html><html><head><title>",firstname, " ", lastname,"</title></head><body><h1>Welcome to ",firstname, " ", lastname,"'s webpage</h1><p>Hello, this is my first webpage!</p></body></html>"], { type: 'text/plain' });
    
    // Add file content in the object URL
    weblink.href = URL.createObjectURL(webfile);
    csslink.href = URL.createObjectURL(webfile);

    // Add file name
    weblink.download = firstname + lastname + "website.html";
    csslink.download = firstname + lastname + "website.css";

    // Add click event to <a> tag to save file.
    weblink.click();
    csslink.click();
    URL.revokeObjectURL(csslink.href);
    URL.revokeObjectURL(weblink.href);
  }
