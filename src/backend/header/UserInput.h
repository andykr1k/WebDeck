#ifndef USERINPUT_H
#define USERINPUT_H

#include "../header/TemplateGenerator.h"
#include "../header/LanguageDescription.h"
#include <string>
using namespace std;

class UserInput{
    public:
        void clearTerminal();
        void getWorkExperience(User *person);
        void getEducation(User *person);
        void getSocialDescription(User *person);
        void getLanguage(User *person);
        void GetUserInfo(User *person);
};
#endif