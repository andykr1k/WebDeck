#ifndef LANGUAGEDESCRIPTION_H
#define LANGUAGEDESCRIPTION_H

#include <string>
using namespace std;

class LanguageDescription{
    private:
        string langName;
        string fluency;
    public:
        LanguageDescription();
        void setLangName(string);
        string getLangName();
        void setFluency(string);
        string getFluency();
};
#endif