*** Settings ***
Library           SeleniumLibrary

Suite Teardown    Close All Browsers

*** Test Cases ***

Headless Chrome - Open Browser
    ${chrome_options} =        Evaluate             sys.modules['selenium.webdriver'].ChromeOptions()    sys, selenium.webdriver
    Call Method                ${chrome_options}    add_argument                                         headless
    Call Method                ${chrome_options}    add_argument                                         disable-gpu
    Call Method                ${chrome_options}    add_argument                                         no-sandbox
    ${options}=                Call Method          ${chrome_options}                                    to_capabilities

    Open Browser               http://cnn.com       browser=chrome                                       desired_capabilities=${options}

    Maximize Browser Window
    Capture Page Screenshot