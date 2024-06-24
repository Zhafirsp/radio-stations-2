import React, { useState } from "react"
import { Link } from "react-router-dom"
import {Container, Row, Button, Form, Col, Modal, ListGroup} from 'react-bootstrap';

const Terms = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Link className="terms" onClick={handleShow} > Terms & Conditions </Link> 
            <Modal 
            size="lg" 
            aria-labelledby="contained-modal-title-vcenter" 
            show={show} 
            onHide={handleClose} 
            className="tabs_content">
              <Modal.Header closeButton className="tab_head">
                <Modal.Title className="fw-bold fs-2">Terms & Conditions</Modal.Title>
              </Modal.Header>
              <Modal.Body className="tab_body">
              <div id="Terms">
              <h4 className="fw-bold"><u><i>Terms of use</i></u></h4>
                  <p>This site, OZ Radio, is operated by of OZ Radio. These Terms of Use apply exclusively to your access to, and use of, our site so please read them carefully. The do not alter in any way the terms or conditions of any other agreement you may have with us for other products or services.</p>
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

export default Terms