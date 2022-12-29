#include "../header/TemplateGenerator.h"

void TemplateGenerator::runCommand(string c)
{
    int n = c.length();
    char char_array[n + 1];
    strcpy(char_array, c.c_str());
    system(char_array);
};

void TemplateGenerator::generateFolders()
{
    string outputCommand = "mkdir output";
    runCommand(outputCommand);

    string firstCommand = "mkdir output/firstdesign";
    runCommand(firstCommand);

    string secondCommand = "mkdir output/seconddesign";
    runCommand(secondCommand);

    string thirdCommand = "mkdir output/thirddesign";
    runCommand(thirdCommand);
};

void TemplateGenerator::bundleFolders()
{
    string firstMoveCommand = "mv FirstDesign.html output/firstdesign";
    runCommand(firstMoveCommand);

    string firstCopyCommand = "cp ./components/FirstDesign.css output/firstdesign";
    runCommand(firstCopyCommand);

    string firstCopyJSCommand = "cp ./components/SecondDesign.js output/firstdesign";
    runCommand(firstCopyJSCommand);

    string secondMoveCommand = "mv SecondDesign.html output/seconddesign";
    runCommand(secondMoveCommand);

    string secondCopyCommand = "cp ./components/SecondDesign.css output/seconddesign";
    runCommand(secondCopyCommand);

    string secondCopyJSCommand = "cp ./components/SecondDesign.js output/seconddesign";
    runCommand(secondCopyJSCommand);

    string thirdMoveCommand = "mv ThirdDesign.html output/thirddesign";
    runCommand(thirdMoveCommand);

    string thirdCopyCommand = "cp ./components/ThirdDesign.css output/thirddesign";
    runCommand(thirdCopyCommand);

    string thirdCopy2Command = "cp ./components/ThirdDesign.css.map output/thirddesign";
    runCommand(thirdCopy2Command);

    string thirdCopy3Command = "cp ./components/ThirdDesign.scss output/thirddesign";
    runCommand(thirdCopy3Command);
};

void TemplateGenerator::generateTemplates(User *person)
{
    generateFolders();
    generateHTML(person);
    bundleFolders();
};

void TemplateGenerator::generateHTML(User *person)
{
    /*------------------First Design--------------------*/
    ofstream GeneratedHTML;
    GeneratedHTML.open("FirstDesign.html");

    //Head and Meta Elements
    GeneratedHTML << "<!DOCTYPE html><html> <head> <title>" << person->getName() << "</title> <meta charset=\"utf-8\"/> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/> <link rel=\"stylesheet\" href=\"FirstDesign.css\"/> </head> <body> <ul> <li><a class=\"active\" href=\"#home\"> " << person->getName() << "</a></li><li><a href=\"#about\">About Me</a></li><li><a href=\"#education\">Education</a></li><li><a href=\"#work\">Work</a></li><li><a href=\"#languages\">Languages</a></li><li><a href=\"#socials\">Socials</a></li></ul> <div id=\"grad\" style=\"margin-left: 15%; padding: 1px 16px; height: 1000px\"> <main class=\"content-wrapper\">";

    //About Me
    GeneratedHTML << "<div class=\"container\"> <div class=\"row\"> <div class=\"col-xs-12\"><h2 style=\"color: white;\">Hello, My Name is " << person->getName() << ".</h2><div class=\"card\" id=\"about\"> <div class=\"card-block\"> <h2>About me</h2> <div class=\"row\"> <div class=\"col-md-10\"> <p>"<< person->getBiography()<<"</p></div></div></div></div>";

    //Education
    if (person->getDescriptions()->getEducationDescriptions().size() > 0){
    GeneratedHTML << "<div class=\"card\" id=\"education\"> <div class=\"card-block\"> <h2>Education</h2> <div class=\"row\">";
    for ( int l = 0; l < person->getDescriptions()->getEducationDescriptions().size(); l++){
        EducationDescription *w = person->getDescriptions()->getEducationDescriptions()[l];
        GeneratedHTML << "<div class=\"col-md-4\"><div class=\"education-experience\"><small class=\"date\">"<<w->getStartTime() <<"-"<<w->getEndTime() <<"</small><h3 class=\"h5 date-title\">"<<w->getMajor() <<" - "<<w->getSchool() <<"</h3></div></div>";
    }
    GeneratedHTML << "</div></div></div>";
    }

    //Work Experience
    if (person->getDescriptions()->getWorkDescriptions().size() > 0){
    GeneratedHTML << "<div class=\"card\"> <div class=\"card-block\"><h2>Work</h2>";
    for ( int i = 0; i < person->getDescriptions()->getWorkDescriptions().size(); i++){
        WorkDescription *w = person->getDescriptions()->getWorkDescriptions()[i];
        GeneratedHTML << "<div class=\"work-experience\"><small class=\"date\">"<<w->getStartTime() <<"-"<<w->getEndTime() <<"</small><h3 class=\"h5 date-title\">"<<w->getTitle() <<" - <a>"<<w->getCompany() <<"</a></h3><p>"<< w->getWorkBiography() << "</p></div>";
    }
    GeneratedHTML << "</div></div>";
    }

    //Languages
    if (person->getDescriptions()->getLanguageDescriptions().size() > 0){
    GeneratedHTML << "<div class=\"card\" id=\"languages\"> <div class=\"card-block\"> <h2>Language</h2> <div class=\"row\">";
    for ( int f = 0; f < person->getDescriptions()->getLanguageDescriptions().size(); f++){
        LanguageDescription *lang = person->getDescriptions()->getLanguageDescriptions()[f];
        GeneratedHTML << "<div class=\"col-md-4\"><div class=\"language-experience\"><h3 class=\"h5\">"<< lang->getLangName() <<" <small>"<< lang->getFluency() <<"</small></h3></div></div>";
    }
    GeneratedHTML << "</div></div></div>";
    }

    //Socials
    if (person->getDescriptions()->getSocialDescriptions().size() > 0){
    GeneratedHTML << "<footer id=\"socials\" class=\"footer-container white-text-container text-center\"><div class=\"container\"><div class=\"row\"> <div class=\"col-xs-12\"><p>";
    for ( int x = 0; x < person->getDescriptions()->getSocialDescriptions().size(); x++){
        SocialDescription *sd = person->getDescriptions()->getSocialDescriptions()[x];
        GeneratedHTML << "<a class=\"fa-icon fa-icon-2x\" href=\""<< sd->getLink() << "\" title=\"\"> <i class=\"fa fa-" << sd->getPlatform()<< "\"></i> </a>";
    }
    GeneratedHTML << "</p></div></div></div></footer>";
    }

    GeneratedHTML << "</div></div></div></main> </div></body> <script>document.addEventListener(\"DOMContentLoaded\", function (event){scrollRevelation('.card');}); </script> <script type=\"text/javascript\" src=\"./SecondDesign.js\"></script></body> </html>";
    

    GeneratedHTML.close();
    /*------------------First Design--------------------*/

    /*------------------Second Design--------------------*/
    ofstream GeneratedHTML2;
    GeneratedHTML2.open("SecondDesign.html");
    // Head and Meta Elements
    GeneratedHTML2 << "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta content=\"IE=edge\" http-equiv=\"X-UA-Compatible\"><meta content=\"width=device-width,initial-scale=1\" name=\"viewport\"><meta content=\"description\" name=\"description\"><meta name=\"google\" content=\"notranslate\"/><meta content=\"Mashup templates have been developped by Orson.io team\" name=\"author\"><meta name=\"msapplication-tap-highlight\" content=\"no\"><title>" << person->getName() << "</title><link href=\"./SecondDesign.css\" rel=\"stylesheet\"></head><body class=\"\"><div class=\"background-color-layer\"></div><main class=\"content-wrapper\"><header class=\"white-text-container section-container\"><div class=\"text-center\">";

    // Header and Title Elements
    GeneratedHTML2 << "<h1>I am " << person->getName() << "</h1><p>";
    if (person->getDescriptions()->getSocialDescriptions().size() > 0){
        for ( int x = 0; x < person->getDescriptions()->getSocialDescriptions().size(); x++){
            SocialDescription *sd = person->getDescriptions()->getSocialDescriptions()[x];
            GeneratedHTML2 << "<a class=\"fa-icon fa-icon-2x\" href=\"" << sd->getLink() << "\" title=\"\"> <i class=\"fa fa-" << sd->getPlatform()<< "\"></i> </a>";
        }
    }
    GeneratedHTML2 << "</p></div></div></div></header>";

    // Biography
    GeneratedHTML2 << "<div class=\"container\"> <div class=\"row\"><div class=\"col-xs-12\"><div class=\"card\"><div class=\"card-block\"><h2>About me</h2><div class=\"row\"><div class=\"col-md-10\"><p> " << person->getBiography() << "</p></div></div></div></div>";

    // Education
    if (person->getDescriptions()->getEducationDescriptions().size() > 0){
    GeneratedHTML2 << "<div class=\"card\"><div class=\"card-block\"><h2>Education</h2><div class=\"row\">";
    for ( int l = 0; l < person->getDescriptions()->getEducationDescriptions().size(); l++){
        EducationDescription *w = person->getDescriptions()->getEducationDescriptions()[l];
        GeneratedHTML2 << "<div class=\"col-md-4\"><div class=\"education-experience\"><small class=\"date\">"<<w->getStartTime() <<"-"<<w->getEndTime() <<"</small><h3 class=\"h5 date-title\">"<<w->getMajor() <<" - "<<w->getSchool() <<"</h3></div></div>";
    }
    GeneratedHTML2 << "</div></div></div>";
    }

    // Work Experience
    if (person->getDescriptions()->getWorkDescriptions().size() > 0){
    GeneratedHTML2 << "<div class=\"card\"> <div class=\"card-block\"><h2>Work</h2>";
    for ( int l = 0; l < person->getDescriptions()->getWorkDescriptions().size(); l++){
        WorkDescription *w = person->getDescriptions()->getWorkDescriptions()[l];
        GeneratedHTML2 << "<div class=\"work-experience\"><small class=\"date\">"<<w->getStartTime() <<"-"<<w->getEndTime() <<"</small><h3 class=\"h5 date-title\">"<<w->getTitle() <<" - <a>"<<w->getCompany() <<"</a></h3><p>"<< w->getWorkBiography() << "</p></div>";
    }
    GeneratedHTML2 << "</div></div>";
    }

    // Languages
    if (person->getDescriptions()->getLanguageDescriptions().size() > 0){
    GeneratedHTML2 << "<div class=\"card\"><div class=\"card-block\"><h2>Language</h2><div class=\"row\">";
    for ( int f = 0; f < person->getDescriptions()->getLanguageDescriptions().size(); f++){
        LanguageDescription *lang = person->getDescriptions()->getLanguageDescriptions()[f];
        GeneratedHTML2 << "<div class=\"col-md-4\"><div class=\"language-experience\"><h3 class=\"h5\">"<< lang->getLangName() <<" <small>"<< lang->getFluency() <<"</small></h3></div></div>";
    }
    GeneratedHTML2 << "</div></div><div></div></div></div></main>";
    }

    // Footer
    if (person->getDescriptions()->getSocialDescriptions().size() > 0){
    GeneratedHTML2 << "<footer class=\"footer-container white-text-container text-center\"><div class=\"container\"><div class=\"row\"> <div class=\"col-xs-12\"><p>";
    for ( int x = 0; x < person->getDescriptions()->getSocialDescriptions().size(); x++){
        SocialDescription *sd = person->getDescriptions()->getSocialDescriptions()[x];
        GeneratedHTML2 << "<a class=\"fa-icon fa-icon-2x\" href=\""<< sd->getLink() << "\" title=\"\"> <i class=\"fa fa-" << sd->getPlatform()<< "\"></i> </a>";
    }
    GeneratedHTML2 << "</p></div></div></div></footer>";
    }

    // Script elements
    GeneratedHTML2 << "<script>document.addEventListener(\"DOMContentLoaded\", function (event){scrollRevelation('.card');});</script><script type=\"text/javascript\" src=\"./seconddesign.js\"></script></body></html>";
    GeneratedHTML2.close();
    /*------------------Second Design--------------------*/

    /*------------------Third Design--------------------*/
    ofstream GeneratedHTML3;
    GeneratedHTML3.open("ThirdDesign.html");

    //Head and Meta Elements
    GeneratedHTML3 << "<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta content=\"width=device-width, initial-scale=1.0\" name=\"viewport\"><title>" << person->getName() << "</title><meta content=\"Development portfolio of .... \" name=\"description\" property=\"og:description\"><link href=\"ThirdDesign.css\" rel=\"stylesheet\"><link href=\"https://fonts.googleapis.com/css?family=Space+Mono\" rel=\"stylesheet\"></head>";

    //Header Elements
    GeneratedHTML3 << "<body><div class=\"loading\"></div><section class=\"header\"><div class=\"column-left\"><h2 class=\"logo-type\">" << person->getName() << "</h2></div><div class=\"column-main\"><div class=\"column-right header-contact\"><a href=\"mailto:" << person->getEmail() << "\" class=\"text-light\">" << person->getEmail() << "</a></div></div></section>";
    //<h3 class=\"header-services\">"<< person->getDescriptions()->getEducationDescriptions()[0]->getMajor() <<"</h3>
    
    //About Me Elements
    GeneratedHTML3 << "<section class=\"tools\"><div class=\"column-left\"><h2>About Me</h2></div><div class=\"column-main\"><div class=\"column-main-container-large\"><h1 >" << person->getBiography() << "</h1></div></div></section>";
    
    //Education Elements
    if (person->getDescriptions()->getEducationDescriptions().size() > 0){
    GeneratedHTML3 << "<section class=\"tools\"><div class=\"column-left\"><h2>Education</h2></div><div class=\"column-main\"><div class=\"column-main-container-large\"><h1>I have attended ";
    for ( int e = 0; e < person->getDescriptions()->getEducationDescriptions().size(); e++){
        EducationDescription *s = person->getDescriptions()->getEducationDescriptions()[e];
        // if (e == person->getDescriptions()->getEducationDescriptions().size() - 1){
        // GeneratedHTML3 << "and " << s->getSchool();
        // } else {
        GeneratedHTML3  << s->getSchool() << "&nbsp";
        // }
    }
    GeneratedHTML3 << "</h1></div></div></section>";
    }

    //Career Elements
    if (person->getDescriptions()->getWorkDescriptions().size() > 0){
    GeneratedHTML3 << "<section class=\"tools\"><div class=\"column-left\"><h2>Career</h2></div><div class=\"column-main\"><div class=\"column-main-container-large\"><h1>I have worked at ";
     for ( int a = 0; a < person->getDescriptions()->getWorkDescriptions().size(); a++){
        WorkDescription *w = person->getDescriptions()->getWorkDescriptions()[a];
        // if (a == person->getDescriptions()->getWorkDescriptions().size() - 1){
        // GeneratedHTML3 << "and " << w->getCompany();
        // } else {
        GeneratedHTML3 << w->getCompany() << "&nbsp";
        // }
    }
    GeneratedHTML3 << "</h1></div></div></section>";
    }
   
    
    
    //Languages Elements
    if (person->getDescriptions()->getLanguageDescriptions().size() > 0){
    GeneratedHTML3 << "<section class=\"tools\"><div class=\"column-left\"><h2>Languages</h2></div><div class=\"column-main\"><div class=\"column-main-container-large\"><h1>";
    for ( int o = 0; o < person->getDescriptions()->getLanguageDescriptions().size(); o++){
        LanguageDescription *l = person->getDescriptions()->getLanguageDescriptions()[o];
        // if (o == person->getDescriptions()->getLanguageDescriptions().size() - 1){
        // GeneratedHTML3 << "and " << l->getLangName();
        // } else {
        GeneratedHTML3 << l->getLangName() << "&nbsp";
        // }
    }
    GeneratedHTML3 << "</h1></div></div></section>";
    }
    
    //Socials Elements

    if (person->getDescriptions()->getSocialDescriptions().size() > 0){
        GeneratedHTML3 << "<section class=\"tools\"><div class=\"column-left\"><h2>Socials</h2></div><div class=\"column-main\"><div class=\"column-main-container-large column-with-links\">";
        for ( int u = 0; u < person->getDescriptions()->getSocialDescriptions().size(); u++){
            SocialDescription *sd = person->getDescriptions()->getSocialDescriptions()[u];
            // if (u == person->getDescriptions()->getSocialDescriptions().size() - 1){
            // GeneratedHTML3 << "<a href=\""<< sd->getLink()<<"\">"<< sd->getPlatform() << "</a>";
            // } else {
            GeneratedHTML3 << "<a href=\""<<sd->getLink()<<"\">" << sd->getPlatform();
            // }
        }
        GeneratedHTML3 << "</h1></div></div></section>";
    }
    
    //Footer Elements
    GeneratedHTML3 << "<section class=\"footer\"><div class=\"column-left\"></div><div class=\"column-main\"><h3 class=\"footer-text\">" << person->getName() << ". All Rights Reserved. 2022. </h3></div></section></body></html>";
    GeneratedHTML3.close();
    /*------------------Third Design--------------------*/
};
