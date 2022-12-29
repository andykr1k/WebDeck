#include "../header/LanguageDescription.h"

LanguageDescription::LanguageDescription() {
    langName = "";
    fluency = "";
}

void LanguageDescription::setLangName(string l) {
    langName = l;
}

string LanguageDescription::getLangName() {
    return langName;
}

void LanguageDescription::setFluency(string f) {
    fluency = f;
}

string LanguageDescription::getFluency() {
    return fluency;
}