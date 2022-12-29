#include "../header/SocialDescription.h"
#include "gtest/gtest.h"
#include <string>

using namespace std;

TEST(SocialDescriptionTests, SocialDescriptionConstructor) {
    SocialDescription *socDes = new SocialDescription();
    EXPECT_EQ (socDes->getLink(), "");
}

TEST(SocialDescriptionTests, LinkGetSet) {
    SocialDescription *socDes = new SocialDescription();
    socDes->setLink("www.link@c++.com");
    EXPECT_EQ (socDes->getLink(), "www.link@c++.com");
}

TEST(SocialDescriptionTests, PlatformGetSet) {
    SocialDescription *socDes = new SocialDescription();
    socDes->setPlatform("Platform.com");
    EXPECT_EQ (socDes->getPlatform(), "Platform.com");
}
