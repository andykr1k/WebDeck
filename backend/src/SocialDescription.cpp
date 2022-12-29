#include "../header/SocialDescription.h"

SocialDescription::SocialDescription() {
    link = "";
    platform = "";
}

void SocialDescription::setLink(string s) {
    link = s;
}

string SocialDescription::getLink() {
    return link;
}

void SocialDescription::setPlatform(string s) {
    platform = s;
}

string SocialDescription::getPlatform() {
    return platform;
}