#include "../header/LanguageDescription.h"
#include "gtest/gtest.h"
#include <string>

using namespace std;

TEST(LanguageDescriptionTests, testConstructor) {
    LanguageDescription *langDes = new LanguageDescription();
    EXPECT_EQ (langDes->getLangName(),"");
    EXPECT_EQ (langDes->getFluency(),"");
}

TEST(LanguageDescriptionTests, LanguageNameGetEmpty) {
    LanguageDescription *langDes = new LanguageDescription();
    EXPECT_EQ (langDes->getLangName(),"");
}
TEST(LanguageDescriptionTests, LanguageNameGetSet) {
    LanguageDescription *langDes = new LanguageDescription();
    langDes->setLangName("Asgardian");
    EXPECT_EQ (langDes->getLangName(),"Asgardian");
}

TEST(LanguageDescriptionTests, FluencyGetEmpty) {
    LanguageDescription *langDes = new LanguageDescription();
    EXPECT_EQ (langDes->getFluency(),"");
}
TEST(LanguageDescriptionTests, FluencyGetSet) {
    LanguageDescription *langDes = new LanguageDescription();
    langDes->setFluency("Google Translate is my friend.");
    EXPECT_EQ (langDes->getFluency(),"Google Translate is my friend.");
}