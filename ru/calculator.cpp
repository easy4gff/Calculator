#include <iostream>
#include <string>
#include <cstdlib>
#include <boost/lexical_cast.hpp>

using namespace std;

int main(int argC, char ** argV) {
  try {
    string mode(argV[1]);
    if (mode == "sum") {
      cout << boost::lexical_cast<int>(argV[2]) + boost::lexical_cast<int>(argV[3]);
    }
    else if (mode == "diff") {
      cout << boost::lexical_cast<int>(argV[2]) - boost::lexical_cast<int>(argV[3]);
    }
    else if (mode == "division") {
      cout << boost::lexical_cast<double>(argV[2]) / boost::lexical_cast<int>(argV[3]);;
    }
    else if (mode == "mult") {
      cout << boost::lexical_cast<int>(argV[2]) * boost::lexical_cast<int>(argV[3])
            * boost::lexical_cast<int>(argV[4]);
    }
    else if (mode == "square") {
      cout << boost::lexical_cast<int>(argV[2]) * boost::lexical_cast<int>(argV[2]);
    }
    else {
      cout << "Unknown method!";
    }
  } catch (const boost::bad_lexical_cast & e) {
    cout << e.what();
  }
  catch (...) {
    cout << "Unexpected error!";
  }

  return 0;
}
