#include "../header/User.h"
User::User() {
    name = "";
    phoneNumber = "";
    email = "";
    biography = "";
    descriptions = new UserDescriptions();
};

User::~User() {
    delete descriptions;
};

UserDescriptions* User::getDescriptions(){
    return descriptions;
}

string User::getName() {
    return name;
}
void User::setName(string n) {
    name = n;
}

string User::getPhone() {
    return phoneNumber;
}
void User::setPhone(string p) {
    phoneNumber = p;
}

string User::getEmail() {
 return email;
}
void User::setEmail(string s) {
    email = s;
}

string User::getBiography() {
    return biography;
}
void User::setBiography(string b) {
    biography = b;
}