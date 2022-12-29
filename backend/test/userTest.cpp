#include "../header/User.h"
#include "gtest/gtest.h"
#include <string>

using namespace std;

TEST(UserTests, testConstructor) {
    User *person = new User();
    EXPECT_EQ (person->getName(),"");
    EXPECT_EQ (person->getPhone(),"");
    EXPECT_EQ (person->getEmail(),"");
    EXPECT_EQ (person->getBiography(),"");
}

TEST(UserTests, NameGetEmpty) {
    User *person = new User();
    EXPECT_EQ (person->getName(),"");
}
TEST(UserTests, NameGetSet) {
    User *person = new User();
    person->setName("Anthony");
    EXPECT_EQ (person->getName(),"Anthony");
}

TEST(UserTests, PhoneNumberGetEmpty) {
    User *person = new User();
    EXPECT_EQ (person->getPhone(),"");
}
TEST(UserTests, PhoneNumberGetSet) {
    User *person = new User();
    person->setPhone("820-555-2985");
    EXPECT_EQ (person->getPhone(),"820-555-2985");
}

TEST(UserTests, EmailGetEmpty) {
    User *person = new User();
    EXPECT_EQ (person->getEmail(),"");
}
TEST(UserTests, EmailGetSet) {
    User *person = new User();
    person->setEmail("email.person@email.com");
    EXPECT_EQ (person->getEmail(),"email.person@email.com");
}

TEST(UserTests, BiographyGetEmpty) {
    User *person = new User();
    EXPECT_EQ (person->getBiography(),"");
}
TEST(UserTests, BiographyGetSet) {
    User *person = new User();
    person->setBiography("email.person@email.com");
    EXPECT_EQ (person->getBiography(),"email.person@email.com");
}

TEST(UserTests, GetDescriptionEmpty) {
    User *user = new User();
    EXPECT_EQ (user->getDescriptions()->getWorkDescriptions().size(), 0);
    EXPECT_EQ (user->getDescriptions()->getSocialDescriptions().size(), 0);
    EXPECT_EQ (user->getDescriptions()->getEducationDescriptions().size(), 0);
    EXPECT_EQ (user->getDescriptions()->getReferenceDescriptions().size(), 0);
    EXPECT_EQ (user->getDescriptions()->getLanguageDescriptions().size(), 0);
}
TEST(UserTests, GetDescriptionFull) {
    User *user = new User();
    //populate vectors
    WorkDescription *workDes = new WorkDescription();
    user->getDescriptions()->setWorkDescription(workDes);
    SocialDescription *socDes = new SocialDescription();
    user->getDescriptions()->setSocialDescription(socDes);
    EducationDescription *edDes = new EducationDescription();
    user->getDescriptions()->setEducationDescription(edDes);
    ReferenceDescription *refDes = new ReferenceDescription();
    user->getDescriptions()->setReferenceDescription(refDes);
    LanguageDescription *langDes = new LanguageDescription();
    user->getDescriptions()->setLanguageDescription(langDes);

    EXPECT_NE (user->getDescriptions()->getWorkDescriptions().size(), 0);
    EXPECT_NE (user->getDescriptions()->getSocialDescriptions().size(), 0);
    EXPECT_NE (user->getDescriptions()->getEducationDescriptions().size(), 0);
    EXPECT_NE (user->getDescriptions()->getReferenceDescriptions().size(), 0);
    EXPECT_NE (user->getDescriptions()->getLanguageDescriptions().size(), 0);
}


// runs all written tests
int main(int argc, char **argv) {
  ::testing::InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}