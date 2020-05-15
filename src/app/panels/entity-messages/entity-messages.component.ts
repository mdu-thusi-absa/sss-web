import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models';

@Component({
  selector: 'app-entity-messages',
  templateUrl: './entity-messages.component.html',
  styleUrls: ['./entity-messages.component.css'],
})
export class EntityMessagesComponent implements OnInit {
  @Input() isNarrow = false;
  filterText = '';
  messages: Message[];
  rdoUnReadReadAll = 'All';
  isNewMessage = false;
  newMessage = new Message(new Date(),'vlad','New Article',true,''); 
  isFilterByTextToo = false;

  constructor() {}

  ngOnInit(): void {
    this.messages = [
      new Message(new Date('2019 June 15'), 'vlad', 'Company Purpose', true,`The drive to overhaul Sasol’s previous operating model
      was initiated following a diagnostic study, commissioned
      in January 2013, to better understand areas where Sasol
      could improve its performance by sustainably
      optimising costs and reducing complexity.
      The four-month long study highlighted the importance
      of simplifying Sasol’s group-wide operating model, since
      we had established and drove independent businesses
      along our integrated value chain, premised
      on product lines.
      Over time, organising our businesses in this manner
      resulted in increased complexity, leading to slower
      decision-making, higher costs and greater time
      required for internal alignment and co-ordination.
      After detailed analysis, benchmarking, weighing up
      the trade-offs between different values and reflecting
      on Sasol’s long-term growth aspirations and strategy,
      an operating model based on Sasol’s value chain was
      confirmed as the best platform to take the organisation
      into the future.
      To this end, our new group structure supports a
      value chain-based operating model, which organises
      our business according to capability, and standardises
      the group functions required to support and enable
      these activities.
      This new operating platform comprises four distinct
      groupings, which relate to the resources, relationships
      and capabilities required by Sasol to deliver on our
      strategic aspirations.`),
      new Message(new Date(), 'dean', 'Contact Info', false,
      `Main contact details			
Physical Address	Postal Address	Tel	Fax
Sasol Place	PO Box 5486	+27 10 344 5000	+27 11 788 5092
50 Katherine Street	Johannesburg		
Sandton	South Africa		
South Africa	2000		
2196			
			
MEDIA RELATIONS			
Name & Surname	Designation	Email	Tel & Fax
Alex Anderson	Head of Group Media Relations	alex.anderson@sasol.com	T: +27 10 344 6509
Matebello Motloung	Specialist: Group Media Relations	matebello.motloung@sasol.com	T: +27 10 344 9256
South African Retail Queries	Call Centre	sasolqueries&enquiries@sasol.com	T: 0860 335 444
Russell Johnson	Senior Manager Public Affairs	media@us.sasol.com	T: +1 281 588 3027
			
INVESTOR RELATIONS			
Name & Surname	Designation	Email	Tel & Fax
Feroza Syed	Chief Investor Relations Officer	investor.relations@sasol.com	T: +27 (0) 10 344 8052
			
CAREERS			
Name		Email	
Recruitment Agencies wanting to do business with Sasol - Ali Moroane			
Sasol Bursary		Berlyner@quest.co.za	
Sasol Careers		careers@sasol.com	
Sasol Learnerships		learnership@sasol.com	
Recruitment Fraud		recruitmentfraud@sasol.com	
			
CORPORATE SOCIAL INVESTMENT			
Name & Surname		Email	Tel & Fax
Sasol CSI and Community Affairs		csi@sasol.com	
			
SPONSORSHIPS			
Name & Surname	Designation	Email	Tel & Fax
Nozipho Mbatha	Senior Manager Group Brand Management	sponsorships@sasol.com	T: +27 10 344 9257
			
STAKEHOLDER RELATIONS			
Name & Surname	Designation	Email	Tel & Fax
	Group Stakeholder Affairs		
Marcel Mitchelson	Vice President: Stakeholder Affairs	marcel.mitchelson@sasol.com	T: +27 10 344 6507
	Southern Africa Regions		
Maureen Mboshane	Secunda Stakeholder Affairs	maureen.mboshane@sasol.com	T: +27 17 610 6302
Zimbini Zwane	Sasolburg Stakeholder Affairs	zimbini.zwane@sasol.com	T: +27 16 960 2039
Zwelakhe Mkhasibe	Satellite Operations (Gas Pipeline) Stakeholder Affairs	zwelakhe.mkhasibe@sasol.com	T: +27 10 345 8503
Mateus Mosse	Mozambique Stakeholder Affairs	Mateus.Mosse@sasol.com	T: +258 21 357 450
	North American Operations Stakeholder Affairs		
Kim Cusimano	Manager Government & Public Affairs	kim.cusimano@us.sasol.com	T: +1 281-588-3764
Russell Johnson	Senior Manager Public Affairs	media@us.sasol.com	T: +1 281 588 3027
	Eurasian Operations Stakeholder Affairs		
Sunna Schultz	Manager Government & Public Affairs	sunna.schulz@de.sasol.com	T: +49 40 63684 1364
			
SUSTAINABLE DEVELOPMENT			
Name & Surname	Designation	Email	Tel & Fax
Alex Russell	Vice President: ESG Disclosure and Reporting	Alexandra.Russell@sasol.com	T: +27 10 344 6585
			
SUSTAINABLE DEVELOPMENT			
Name & Surname	Designation	Email	Tel & Fax
Alex Russell	Vice President: ESG Disclosure and Reporting	Alexandra.Russell@sasol.com	T: +27 10 344 6585
			
ENTERPRISE & SUPPLIER DEVELOPMENT			
Name & Surname	Designation	Email	Tel & Fax
Sasol Enterprise and Supplier Development	Requests and Information	info.esd@sasol.com	
			
Franchise			
Name & Surname	Designation	Email	Tel & Fax
Sasol Oil	Franchise Applications	FranchiseApplications@sasol.com	T: +27 860 335 444
			
Mining			
Name & Surname	Designation	Email	Tel & Fax
Tshedi Mahao	Senior Manager: Corporate Affairs	Tshedi.Mahao@sasol.com	T: +27 (17) 614 3216
			
Exploration and production international			
Nompilo MorafoSenior Manager: Public Affairsnompilo.morafo@sasol.com			
T: +27 (11) 344 0745			
			
SECUNDA SYNFUELS OPERATIONS			
Name & Surname	Designation	Email	Tel & Fax
Nompilo Morafo	Senior Manager: Public Affairs	nompilo.morafo@sasol.com	T: +27 (11) 344 0745
Cobus Beukes	Senior Manager: Public Affairs	cobus.beukes@sasol.com	T: +27 11 790 1402
			
Torsten Titze	Senior Manager: Public Affairs	info@de.sasol.com	T: +49 40 63 684 1000
		20537 Hamburg	
`),
      new Message(new Date(), 'sasha', 'Contact History', true,''),
      new Message(new Date(), 'ulrich', 'AFS 2019', true,''),
      new Message(new Date(), 'vlad', 'AFS 2018', true,''),
      new Message(new Date(), 'dean', 'Structure 2020.01', false,
      `Good morning and good afternoon to everyone and thank you for joining us on the call today.
      I would like to take you through some of the key financial and operational highlights from today’s announcement and then open the call for questions.
      We have delivered strong operational and financial results for the first quarter of our 2014 financial year, despite ongoing global economic uncertainty and industrial actions in South Africa.
      The group benefited from a 21% weaker rand/US dollar exchange rate. The average Brent crude oil price improved slightly, and chemical prices were also higher compared to the prior year comparable period. Refinery margins and petrol differentials were lower compared to the comparable period.
      Operational performance in most of our South African energy businesses remains strong:
      Synfuels continues to deliver strong operational performance. Synfuels successfully completed the largest shutdown in history with a total and phase shutdown of the east factory in September. Year-to-date production for the three months to September was 1,7 million tons, or 5% lower than financial year 2013. Normalising for the impact of the full shutdown, Synfuels’ volumes increased by 2% compared to the comparable period. Run rates in October were also very strong. Our full year volume guidance still remains unchanged at between 7,3 and 7,5 million tons.
      Sasol Oil’s production volumes were 7% lower compared to the comparable period mainly due to cut-back of production at Natref as a result of higher 93 Unleaded Petrol stock levels. Plans and actions are in place to increase the production of 95 ULP to minimise the impact of Natref cut-backs.`),
      new Message(new Date(), 'sasha', 'Information 7', true,''),
      new Message(new Date(), 'ulrich', 'Information 8', true,''),
      new Message(new Date(), 'vlad', 'Information 9', true,''),
      new Message(new Date(), 'dean', 'Information 10', false,''),
      new Message(new Date(), 'sasha', 'Information 11', true,''),
      new Message(new Date(), 'ulrich', 'Information 12', true,''),
      new Message(new Date(), 'vlad', 'Information 13', true,''),
      new Message(new Date(), 'dean', 'Information 14', false,''),
      new Message(new Date(), 'sasha', 'Information 15', true,''),
      new Message(new Date(), 'ulrich', 'Information 16', true,''),
      new Message(new Date(), 'vlad', 'Information 17', true,''),
      new Message(new Date(), 'dean', 'Information 18', false,''),
      new Message(new Date(), 'sasha', 'Information 19', true,''),
      new Message(new Date(), 'ulrich', 'Information 20', true,''),
    ];
  }

  showMessagesThatAre(typ: string) {
    console.log(typ);
    if (typ === 'unread') {
      this.messages.filter((msg) => !msg.isRead);
    } else if (typ === 'read') {
      this.messages.filter((msg) => msg.isRead);
    } else {
      this.messages.filter((msg) => true);
    }
  }

  getCount_All() {
    return this.messages.length;
  }

  getCount_Unread() {
    return this.messages.filter((msg) => !msg.isRead).length;
  }

  getCount_Read() {
    return this.messages.filter((msg) => msg.isRead).length;
  }

  shouldHideMessage(msg: Message) {
    let inFilter = true;
    let inText = true;
    let inTitle = true;
    let inWhen = true;
    let inWho = true;
    if (this.filterText.length > 0) {
      inTitle =  msg.title.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1;
      if (this.isFilterByTextToo)
        inText =  msg.text.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1;
      else inText = false;
      inWhen = msg.whenString().indexOf(this.filterText.toLowerCase()) > -1;
      inWho = msg.who.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1;
      inFilter = inTitle || inText || inWhen || inWho;
    }
    let inReadChoice = true;
    if (this.rdoUnReadReadAll == 'all') {
      inReadChoice = true;
    } else if (this.rdoUnReadReadAll == 'eye-close') {
      inReadChoice = !msg.isRead;
    } else if (this.rdoUnReadReadAll == 'eye-open') {
      inReadChoice = msg.isRead;
    }

    let doShow = inFilter && inReadChoice;
    return !doShow;
  }

  doAdd(){
    this.isNewMessage = true;
  }

  doCancel(){
    this.isNewMessage = false;
  }

  doAddPost_Close(){
    this.isNewMessage = false;
  }

  getCountFiltered(){
    return this.messages.filter(e => !this.shouldHideMessage(e)).length;
  }

  doFilter(event: any){
    this.filterText = event;
  }
}
