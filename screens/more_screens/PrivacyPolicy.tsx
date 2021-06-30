import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { COLORS, SIZES } from '../../constants'

const PrivacyPolicy = () => {
    return (
        <ScrollView style={{ backgroundColor: COLORS.white }} showsVerticalScrollIndicator={false}>
            <View
                style={{
                    margin: SIZES.padding,
                }}
            >
                <Text style={{ fontWeight: "600", fontSize: SIZES.h1 }}>Privacy Policy</Text>
                <View>
                    <Text>We have created an application called Cryptonium (“Application”).</Text>

                    <Text>This page is intended to inform the visitors about our policy regarding the collection, use and disclosure of personal information whenever someone chooses to utilize our Service.

                        If you choose to use our service, you agree to the collection, and use of information regarding this Policy. The personal information, collected by our application, is used for the Service provision and improvement. The application will not use or share your information with anyone except the persons listed in this Privacy Policy.

                        The terms used in this Privacy Policy have the same meanings as in our Terms of Use unless otherwise specified.</Text>

                    <Text style={{ fontSize: SIZES.h2, marginVertical: 4 }}>General information</Text>

                    <Text>For the best experience when using our Service, an application may need to provide us with the certain personal information listed below in this Policy.

                        The application uses third-party services that may collect information used in order to identify you.

                        Link to the privacy policy of third-party service providers:</Text>

                    <Text style={{ fontSize: SIZES.h2, marginVertical: 4 }}>Google Play Services.</Text>
                    <Text style={{ fontSize: SIZES.h3, marginVertical: 4 }}>Guide</Text>

                    <Text>We would like to inform you that whenever you utilize our application, we collect data and information (via third-party products) on your device which is called "Log Data". This Log Data may include information such as your device’s IP address, the name of the device, the version of the operating system, the configuration of the application, the time and date of your utilizing of the Service, and other statistics.</Text>

                    <Text style={{ fontSize: SIZES.h3, marginVertical: 4 }}>Cookies</Text>

                    <Text> Cookies are files with a small amount of data, which are commonly used as anonymous unique identifiers. They are sent to your browser from the websites you visit and are stored in your device’s internal memory.

                        Our application does not use these cookies. However, the application can use third-party code and libraries that use cookies to collect information and improve their services. You have the option to accept or cancel these cookies and find out when they are sent to your device. If you choose to cancel our cookies, you won’t be able to utilize some of the features of this Service.</Text>

                    <Text style={{ fontSize: SIZES.h2, marginVertical: 4 }}>Service providers</Text>

                    <Text style={{ fontSize: SIZES.h3, marginVertical: 4 }}>We may use third-party companies and individuals for the following reasons:</Text>

                    <Text>to improve the performance of our Service;
                        to submit the Service on our behalf;
                        for the performance of services;
                        to assist us in analyzing the work of our Service.
                        We would like to inform the users of our application that these third parties have access to your personal information. The reason for this is the execution of tasks assigned to them on our behalf. However, they are required not to disclose / not use the information for any other purposes.</Text>

                    <Text style={{ fontSize: SIZES.h3, marginVertical: 4 }}>Security</Text>

                    <Text>We value your trust in providing us with your personal information, that’s why we strive to use commercially relevant means to protect it. Please remember that there is no method of Internet connection or method of electronic storage is 100% safe and reliable, and we can not guarantee the absolute security of your information.</Text>

                    <Text style={{ fontSize: SIZES.h3, marginVertical: 4 }}>Links to the other sites</Text>

                    <Text>The Service may contain links to the other sites. If you click on a link from a third-party, you will be redirected to their site. Please note that we do not manage these external sites. Therefore, we strongly recommend that you study the privacy policies of these websites. We do not control and are not responsible for the content, privacy policy or practices of third-party websites or services.</Text>

                    <Text style={{ fontSize: SIZES.h3, marginVertical: 4 }}>Limit of age</Text>

                    <Text>Our application is not addressed to persons under the age of 13 years. If we become aware that a child under the age of 13 has provided us with personal information, we will immediately delete this data from our servers. If you are a parent or guardian and you know that your child has provided us with personal information, please contact us in order to take the necessary measures.</Text>

                    <Text style={{ fontSize: SIZES.h3, marginVertical: 4 }}>Advertising ID</Text>

                    <Text>We notify you that our application uses advertising identifiers. This function is intended for a more convenient selection of advertising for you. It is necessary to show you targeted ads based on your personal interests.</Text>

                    <Text style={{ fontSize: SIZES.h3, marginVertical: 4 }}>Policy change</Text>

                    <Text>We may update our Privacy Policy from time to time. Therefore, it is recommended that you periodically review this page for any changes. We will notify you of any changes by posting a new Privacy Policy on this page. These changes take effect immediately upon posting on this page.</Text>

                    <Text style={{ fontSize: SIZES.h3, marginVertical: 4 }}>Contacts</Text>

                    <Text>If you have any questions or suggestions about our Privacy Policy, please don’t hesitate to contact us.</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default PrivacyPolicy
