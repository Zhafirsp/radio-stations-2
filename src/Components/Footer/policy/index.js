import React, { useState } from "react"
import { Link } from "react-router-dom"
import {Container, Row, Button, Form, Col, Modal, ListGroup} from 'react-bootstrap';

const Policy = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Link className="terms" onClick={handleShow}> Privacy Policy </Link> 
            <Modal 
            size="lg" 
            aria-labelledby="contained-modal-title-vcenter" 
            show={show} 
            onHide={handleClose} 
            className="tabs_content">
              <Modal.Header closeButton className="tab_head">
                <Modal.Title className="fw-bold fs-2">Privacy & Policy</Modal.Title>
              </Modal.Header>
              <Modal.Body className="tab_body">
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
              </Modal.Body>
              <Modal.Footer className="tab_foot flex_align_justify">
                <Button variant="secondary" className="decline" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" className="agree" onClick={handleClose}>
                  Agree
                </Button>
              </Modal.Footer>
            </Modal>
    </>
  )
}

export default Policy