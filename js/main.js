// Inquiry form: opens the visitor's email app. Change the address below to edit the recipient.
const $=id=>document.getElementById(id);
const inquiryFields=[['name','Name'],['contact-email','Email'],['phone','Phone number'],['city','Project city or ZIP code'],['type','Project type'],['project-notes','Project notes']];
function brief(){return 'BlueView project inquiry\n\n'+inquiryFields.map(([id,label])=>label+': '+($(id).value.trim()||'Not provided')).join('\n')+'\n\nI would like to discuss my project and budget requirements.';}
$('planner').addEventListener('submit',event=>{event.preventDefault();if(!$('planner').reportValidity())return;location.href='mailto:info@blueviewbuilder.com?subject='+encodeURIComponent('BlueView project inquiry')+'&body='+encodeURIComponent(brief());$('submit-status').textContent='Your email app will open. Review the inquiry and press Send to finish submitting. If it doesn’t open, use the email, call, or text links beside the form.';});
