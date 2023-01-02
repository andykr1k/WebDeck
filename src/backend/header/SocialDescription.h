#ifndef SOCIALDESCRIPTION_H
#define SOCIALDESCRIPTION_H

#include <string>
using namespace std;

class SocialDescription {
    private:
        string link;
        string platform;
    public:
        SocialDescription();
        void setLink(string);
        string getLink();
        void setPlatform(string);
        string getPlatform();
};

#endif