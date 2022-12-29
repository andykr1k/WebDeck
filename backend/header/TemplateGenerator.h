#ifndef TEMPLATEGENERATOR_H
#define TEMPLATEGENERATOR_H

#include "User.h"
#include <vector>
#include <string>
#include <cstring>
#include <fstream>
using namespace std;

class TemplateGenerator {
    public:
        void generateTemplates(User *person); //bundles css with html
        void generateHTML(User *person); //transforms user data into HTML format
        void generateFolders();
        void bundleFolders();
        void runCommand(string c);
};

#endif