import React, { useState } from "react"
import { Link } from "react-router-dom"
import Policy from "../Components/Footer/policy"
import Terms from "../Components/Footer/terms"
import { Container } from "react-bootstrap"


const PP_Terms = () => {

  return (
    <>
    <Container fluid className="col-md-8">
      <div>
        <h4 style={{ marginTop:"200px" }} className="fw-bold">Privacy Policy and Terms of Use</h4>
          <p><a href="#Terms" className="text-primary">(Click here for Terms of Use)</a></p>
          <p>Our Privacy Policy and Terms of Use apply to all users of OZ Radio’s digital platforms, including this website, embeddable content that we may make available for use on other people’s websites or digital platforms, and our apps (but not including third party content, discussed in Other Sites and Services, below.)</p>
          <p>Last Updated: May 2017</p>
          <div>
                  <h4 id="Policy" className="fw-bold"><i>Privacy Policy</i></h4>
                  <p>We take your privacy seriously, and want you to understand how we do and don’t use information about you.</p>
                  </div>
                <div>
                <h4 id="CollectInfo"><u><i>How We Collect Information</i></u></h4>
                  <p>
                    <u>Information We Collect Automatically from Users</u>. When you use our digital platforms, we may automatically recognize information like your IP address, operating system, what type of device you’re using, geotargeting information (what geographic area you’re in), and your user behavior (e.g., how long you stay on the website).
                    <br/>
                    For example, we may use “cookies,” “web beacons” or other similar small files sent to your computer as part of our digital functionality (e.g., to better understand your preferences).
                    <br/>
                    In addition, we use third-party vendors that provide services for our digital platforms (e.g., analytics) which may each use their own cookies and web beacons as part of our digital platforms.
                  </p>
                  <p><u>Information Users Give Us Voluntarily</u>. You may voluntarily give us information like:</p>
                   <ul>
                      <li>Your login information</li>
                      <li>Your email address (e.g., when you sign up for a newsletter)</li>
                      <li>Your responses to surveys or contests (each contest will also have its own rules that apply)</li>
                      <li>Your content submissions (e.g., in response to a call for photos)</li>
                      <li>Your comments on articles</li>
                      <li>use any meta tags or any other "hidden text" utilizing a OZ Radio name, trademark, or product name.</li>
                      <li>Your phone number (e.g., if you text us)</li>
                      <li>Purchase information for any ticketed events or merchandise we may sell</li>
                   </ul>
                  </div>
                <div >
                <h4 id="UseInfo"><u><i>How We Use Information</i></u></h4>
                <p><u>Personally Identifiable Information</u>. We do not store users’ passwords. When we ask for personally identifiable information (like your name, address, email address, phone number or credit card information), we only use the information you give us within the OZ Radio family of services, except as noted below under List Sharing Policy. For example, we may email you to invite you to join a new newsletter list, invite you to events, or ask you to renew your credit card when it expires, and we may share your information with third party vendors, but only to help us do these sorts of things (and not for their own use). If you do not wish to be contacted, please indicate your preference by opting out on the donation form or through the opt-out information provided in the email you receive, or contact Donor Services. We will do our best to make your change in a timely manner. You should also contact Donor Services if you would like to review or correct your information. We may also aggregate your personally identifiable information (such as your address) with others to produce non-personally identifiable information that we may use to analyze and improve what we do.</p>
                <p><u>Payment Information</u>. When you provide us payment information to process a donation or otherwise engage in a financial transaction (or set of recurring transactions), this information is encrypted, using reasonable, industry-standard security measures, and is used (generally by our third-party vendors) only to fulfill your transaction(s). Your payment information is retained only as long as required to process your transaction(s), and is removed and destroyed thereafter.</p>
                <p><u>Non-Personally Identifiable Information</u>. We use other information (other than personal information and payment information) for things like improving your user experience (e.g., using your user history to provide recommendations to you and other users with similar histories), selecting third-party vendors who best meet our needs, and helping foundation and corporate donors better understand our audience. In doing this, we share non-personally identifying information with third parties. Please note that if you share personal information through a public feature that it may become public (e.g., if you include your email address in a comment, other users will see it, or if you include your name in a content submission, it may be read on the air or posted online to attribute the content). Lastly, if we are required by law to share your information (including personal and payment information), we will share to the extent necessary to comply.</p>
                <p><u>List Sharing Policy</u>. We may share personally identifiable information with our affiliate, the University of Washington, which acts on our behalf and at our request in fulfilling our fundraising goals. We will not share lists of such information with parties that are not similarly assisting us in our fundraising activities, on our behalf and at our request. Except for the limited purposes described above under Personally Identifiable Information, we will not transfer or exchange personally identifiable information with any non-affiliated organization. In the event we seek to share email addresses or phone numbers with someone else (e.g., if we collect your email while ticketing an event, and want to share with our co-presenter), we will ask for your permission. It is also our policy not to transfer or exchange the personally identifiable information of donors with any candidate for federal, state or local office, political committee, or political party for any purpose whatsoever, except as otherwise required by law or judicial process. We maintain active control of our donor lists, and take all appropriate measures to ensure against unauthorized use of such lists, including requiring any third-party, including but not limited to list brokers, mail-list management companies, fundraising organizations, and advertising or public relations agencies, to abide by our compliance requirements, except as otherwise required by law or judicial process.</p>
                </div>
                <div>
                <h4 id="Sites"><u><i>Other Sites and Services</i></u></h4>
                  <p>Our digital platforms contain links to services maintained by third parties that do not necessarily follow the same privacy practices as OZ Radio. In some cases, we may also include on our digital platforms certain embedded tools provided and controlled by third parties, or that permit you to submit information to third parties. These services and tools are governed by the terms and policies of those third parties. Our digital platforms also include widgets from third party services, e.g., a button that allows you to “like” an article on Facebook. All of these third party services have their own terms and policies. Please review these services’ own privacy policies for more information.</p>
                </div>
                <div>
                <h4 id="Contest"><u><i>Contests</i></u></h4>
                  <p>From time to time, we may offer contests that users may enter through our digital platforms. Please note that these contests may each have their own official rules, which give us additional rights to use entries, and which govern your participation in the contest. OZ Radio may share contest and ticket winner information with business partners to facilitate transfer,  delivery and logistics around eTickets and/or other contest details.</p>
                </div>
                <div>
                <h4 id="ChangePP"><u><i>Changes to Privacy Policy</i></u></h4>
                  <p>We will notify users who have registered login information and an email address of changes to this Privacy Policy, and any changes will only take effect prospectively from the date of the change.</p>
                </div>
                <div>
                <h4 id="Contacting"><u><i>Contacting Us</i></u></h4>
                  <p>If you have additional questions about how your personal information may be used, or if you have questions or comments about this Privacy Policy, please contact privacy Or you can send mail to: <a href="mailto:programozbali@gmail.com" target="_blank" className="text-primary">programozbali@gmail.com</a>, Kompleks Pertokoan Sunset Indah IIB Blok 5 Sunset Road Kuta, Bali 80361</p>
                </div>
                <div>
                <h4 id="DataProtection"><u><i>Data Protection under GDPR</i></u></h4>
                  <p>European Union citizens and individuals residing in the EU are entitled to additional protections under the General Data Protection Regulation (“GDPR”). The circumstances under which OZ Radio has lawful basis for processing the personal data of an individual who is subject to GDPR protections will vary, but may include contractual necessity, compliance with legal obligations, public interest, or the legitimate business interests of OZ Radio, provided that such interest is not overridden by the rights or freedoms of the individual. Where no such lawful basis may exist for processing personal data, OZ Radio must obtain affirmative consent before any processing may occur.</p>
                  <p>Subject to exemptions under applicable law (which may include, depending on the circumstances, U.S. law protecting the rights to free speech and free press or EU law protecting the rights to freedom of expression or information, including processing for journalistic purposes), you have the following rights with respect to your personal data:</p>
                  <ul>
                      <li>To request a copy of your personal data which OZ Radio holds;</li>
                      <li>To request that OZ Radio provide you access to and/or rectify personal data that is inaccurate or out of date;</li>
                      <li>To request erasure of your personal data where it is no longer necessary for OZ Radio to retain it;</li>
                      <li>If you have consented to processing, the right to withdraw consent at any time;</li>
                      <li>To request that the data controller provide you with your personal data and where possible, to transmit that data directly to another data controller, where applicable. This right of portability only applies where the processing is based on consent or is necessary for the performance of a contract and if OZ Radio processes the data by automated means;</li>
                      <li>To request a restriction on further processing where applicable;</li>
                      <li>The right to object to processing if the processing is for direct marketing, or is for scientific/historical research and statistics;</li>
                      <li>To lodge a complaint with a supervisory authority.</li>
                   </ul>
                  <p>You may exercise these rights by contacting OZ Radio at privacy@OZ Radio.org and stating your specific request in writing. OZ Radio reserves the right to verify your identity and confirm your right to the information. The following options are also available:</p>
                  <ul>
                      <li>To withdraw consent for collection of precise device location, you may access the privacy settings of your mobile device and/or the settings of the OZ Radio mobile application.</li>
                      <li>To withdraw consent to marketing emails or email newsletters, click the "unsubscribe" link on the email. You may also change your newsletter preferences by signing into your account or by contacting us. However, even if you opt out of receiving such communications, we retain the right to send you non-marketing communications (such as information about changes to our Terms of Use or this Notice).</li>
                      <li>To prevent your data from being used by Google Analytics, click here for the Google Universal Analytics opt-out browser add-on: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" className="text-primary">https://tools.google.com/dlpage/gaoptout</a>. To learn more about how Google uses data, visit <a href="https://www.google.com/policies/privacy/partners" target="_blank" className="text-primary">https://www.google.com/policies/privacy/partners</a>.</li>
                   </ul>
                  <p>For more information about GDPR, please visit <a href="https://www.eugdpr.org." target="_blank" className="text-primary">https://www.eugdpr.org</a>.</p>
                </div>
                <div id="Terms" className="pt-5">
                  <h4 className="pt-5 fw-bold"><u><i>Terms of use</i></u></h4>
                  <p>This site, OZ Radio, is operated by Friends of OZ Radio. These Terms of Use apply exclusively to your access to, and use of, our site so please read them carefully. The do not alter in any way the terms or conditions of any other agreement you may have with us for other products or services.</p>
                  <p>We reserve the right to change or modify any of the terms and conditions contained in our Terms of Use, at any time and in our sole discretion. Any changes or modification will be effective upon posting of the revisions. Your continued use of this site following the posting of such revisions will constitute your acceptance of such changes or modifications. Therefore, you should frequently review these Terms of Use from time to time to understand the terms and conditions that apply to your use of the site.</p>
                  <p>BY ACCESSING, BROWSING, AND USING THIS SITE, YOU AGREE TO BE BOUND BY THE TERMS AND CONDITIONS DESCRIBED BELOW, ALL POLICIES AND GUIDELINES INCORPORATED BY REFERENCE, AND ANY SUBSEQUENT CHANGES TO THE FOREGOING. IF YOU DO NOT AGREE TO THESE TERMS OF USE OR ANY SUBSEQUENT MODIFICATION, DO NOT ACCESS, BROWSE OR OTHERWISE USE THIS SITE.</p>
                   <ol type="a">
                      <li>copy, publish, display, publicly perform, or distribute any Materials, including reproduction on any computer network or broadcast or publication media;</li>
                      <li>resell or make commercial use of the site or the Materials;</li>
                      <li>systematically collect or use any data or content, including the use of any data mining, robots, or similar data gathering and extraction methods; or</li>
                      <li>make derivative uses of the site or the Materials;</li>
                      <li>use, frame or utilize framing techniques to enclose any OZ Radio trademark, logo or other proprietary information (including the images found at this site, the content of any text or the layout/design of any page or form contained on a page); or</li>
                      <li>use any meta tags or any other "hidden text" utilizing a OZ Radio name, trademark, or product name.</li>
                   </ol>
                   <p>Except for the limited license granted to you, you are not conveyed any other right or license by implication, estoppel, or otherwise in or under any patent, trademark, copyright, or proprietary right of OZ Radio or any third party. Any unauthorized use of this site will terminate the permission or license granted by these Terms of Use and may violate applicable law including copyright laws, trademark laws (including trade dress), and communications regulations and statutes.</p>
                </div>
                <div>
                <h4 id="Copyright"><u><i>Copyright Agent</i></u></h4>
                  <p>We respect the intellectual property rights of others. If you believe that your work has been copied in a way that constitutes copyright infringement by any content or material on this site (or any other digital platform we use), please provide the following information in writing to our Copyright Agent (see 17 U.S.C. § 512(c)(3) for further detail):</p>
                  <ol type="1">
                    <li>a physical or electronic signature of a person authorized to act on behalf of the owner of the copyright.</li>
                    <li>a description of the copyrighted work that you claim has been infringed.</li>
                    <li>a description of the material that you claim to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information sufficient to permit us to locate the material.</li>
                    <li>information so that we can contact you, such as address, telephone number and email address.</li>
                    <li>a statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
                    <li>a statement that the information in the notification is accurate and, under penalty of perjury, that you are the copyright owner or are authorized to act on behalf of the owner of a copyright that is allegedly infringed.</li>
                  </ol>
                  <p>Our Copyright Agent can be reached as follows:</p>
                  <br/>
                  <p>Scott Bell
                    <br/>
                    Copyright Agent
                    <br/>
                    OZ Radio
                    <br/>
                    Kompleks Pertokoan Sunset Indah IIB Blok 5 Sunset Road Kuta  
                    <br/>
                    Bali, 80361
                    <br/>
                    Phone: +62 899 940 101 2
                    <br/>
                    Email: programozbali@gmail.com
                  </p>
                  <p>Only DMCA notices should be sent to the Copyright Agent. For other comments or questions regarding these Terms of Use, please contact legal programozbali@gmail.com</p>
                </div>
                <div >
                <h4 id="Webcasts"><u><i>Webcasts</i></u></h4>
                <p>OZ Radio is the copyright owner of or an authorized licensee for all webcasts (including all compositions and sound recordings contained therein), whether simulcast or archived, distributed on this site. You may stream the webcasts from the site for your personal, non-commercial use only. The webcasts, or any song contained within a webcast, may not be copied, reproduced, distributed, republished, downloaded, displayed, publicly performed, posted or transmitted in any form or by any means, including without limitation the transferring or downloading of a webcast or any portion thereof to a computer hard drive or other storage medium.</p>
                </div>
                <div>
                    <h4 id="Trademarks"><u><i>Trademarks Notice</i></u></h4>
                  <p>OZ Radio, our logo, and the products and services described in this site, are either trademarks, service marks or registered trademarks of OZ Radio or its licensors, and may not be copied, imitated or used, in whole or in part, without our prior written permission. In addition, all page headers, custom graphics, button icons, and scripts are service marks, trademarks, and/or trade dress of OZ Radio, and may not be copied, imitated, or used, in whole or in part, without our prior written permission. All other trademarks, registered trademarks, product names and OZ Radio names or logos mentioned herein are the property of their respective owners. Reference to any products, services, processes, or other information, by trade name, trademark, manufacturer, supplier, or otherwise, does not constitute or imply endorsement, sponsorship or recommendation thereof by us.</p>
                </div>
                <div>
                <h4 id="Linking"><u><i>Linking</i></u></h4>
                  <p>You may not use our logo or other proprietary graphic or trademark to link to this site without our express written permission. This limited right may be revoked at any time. We make no claim or representation regarding, and accept no responsibility for, the quality, content, nature or reliability of sites accessible by hyperlink from this site, or other sites linking to this site. The linked sites are not under our control and we are not responsible for their content. We are providing these links to you only as a convenience, and the inclusion of any link does not imply affiliation, endorsement, or adoption by us of the site or any information contained therein. When leaving this site, you should be aware that our terms and policies no longer govern, and, therefore, you should review the applicable terms and policies, including privacy and data gathering practices, of that site.</p>
                </div>
                <div>
                <h4 id="Disclaimers"><u><i>Disclaimers</i></u></h4>
                  <p>THIS SITE AND THE MATERIALS ARE PROVIDED ON AN "AS IS" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. YOU EXPRESSLY AGREE THAT USE OF THIS SITE, INCLUDING ALL CONTENT OR DATA DISTRIBUTED BY, DOWNLOADED OR ACCESSED FROM OR THROUGH, THIS SITE IS ACCESSED AT YOUR SOLE RISK. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT AS TO THE INFORMATION, MATERIALS, AND CONTENT ON THIS SITE. WE DO NOT REPRESENT OR WARRANT THAT MATERIALS IN THIS SITE ARE ACCURATE, COMPLETE, RELIABLE, CURRENT, OR ERROR-FREE. WE ARE NOT RESPONSIBLE FOR TYPOGRAPHICAL ERRORS OR OMISSIONS RELATING TO PRICING, TEXT OR PHOTOGRAPHY. WHILE WE ATTEMPT TO ENSURE YOUR ACCESS AND USE OF THE SITE IS SAFE, WE CANNOT AND DO NOT REPRESENT OR WARRANT THAT THIS SITE OR ITS SERVER(S) ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>
                </div>
                <div>
                <h4 id="Limitation"><u><i>Limitation of Liability</i></u></h4>
                  <p>IN NO EVENT SHALL OZ Radio BE LIABLE FOR ANY DIRECT, SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES, OR ANY OTHER DAMAGES OF ANY KIND, INCLUDING BUT NOT LIMITED TO LOSS OF USE, LOSS OF PROFITS, OR LOSS OF DATA, WHETHER IN AN ACTION IN CONTRACT, TORT (INCLUDING BUT NOT LIMITED TO NEGLIGENCE), EQUITY OR OTHERWISE, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF THIS SITE OR THE MATERIALS.</p>
                </div>
                <div>
                <h4 id="ApplicableLaw"><u><i>Applicable Law and Venue</i></u></h4>
                  <p>These terms and conditions shall be governed by and construed in accordance with the laws of the State of Washington, USA without resort to its conflict of law provisions. A dispute related to your use of the site shall be brought exclusively in the state or federal courts located in King County, Washington.</p>
                </div>
                <div>
                <h4 id="GeneralTerms"><u><i>General Terms</i></u></h4>
                  <p>Notwithstanding anything else in these Terms of Use, we reserve the right, without notice and in our sole discretion, to terminate your license to use the site, and to block or prevent future access to and use of the site. If any provision of these Terms of Use shall be deemed unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from the remaining provisions of these Terms of Use and shall not affect the validity and enforceability of such remaining provisions.</p>
                </div>
        </div>
      </Container>
    </>
  )
}

export default PP_Terms