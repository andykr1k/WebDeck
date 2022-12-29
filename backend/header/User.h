#ifndef USER_H
#define USER_H

#include "Descriptions.h"
#include <iostream>
#include <string>
using namespace std;

class User {
    private:
        string name;
        string phoneNumber;
        string email;
        string biography;
        UserDescriptions *descriptions;

    public:
        User();
        ~User();
        string getName();
        void setName(string);
        string getPhone();
        void setPhone(string);
        string getEmail();
        void setEmail(string);
        string getBiography();
        void setBiography(string);
        UserDescriptions* getDescriptions();
};
#endif