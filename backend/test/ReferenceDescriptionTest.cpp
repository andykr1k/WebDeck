#include "../header/ReferenceDescription.h"
#include "gtest/gtest.h"
#include <string>
#include <iostream>

using namespace std;

// private:
//     string refName;
//     string role;
//     string company;
// public:
    // ReferenceDescription(); DONE 
    // void setRefName(string s); DONE 
    // string getRefName(); DONE
    // void setRole(string r); DONE
    // string getRole(); DONE
    // void setCompany(string c); DONE
    // string getCompany(); DONE

TEST(ReferenceDescriptionTests, testConstructor) {
    ReferenceDescription *person = new ReferenceDescription();
    EXPECT_EQ (person->getRefName(), "");
    EXPECT_EQ (person->getRole(), "");
    EXPECT_EQ (person->getCompany(), "");
}

TEST(ReferenceDescriptionTests, testSetRefName) {
    ReferenceDescription *person = new ReferenceDescription();
    person->setRefName("Bob");
    EXPECT_EQ (person->getRefName(), "Bob");
}

TEST(ReferenceDescriptionTests, testSetRole) {
    ReferenceDescription *person = new ReferenceDescription();
    person->setRole("reference description");
    EXPECT_EQ (person->getRole(), "reference description");
}

TEST(ReferenceDescriptionTests, testCompany) {
    ReferenceDescription *person = new ReferenceDescription();
    person->setCompany("Google");
    EXPECT_EQ (person->getCompany(), "Google");
}
