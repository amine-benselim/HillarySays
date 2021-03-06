chrome.runtime.sendMessage({
	action: 'getKeyWordsFromPage',
	source: textNodes(document)
})


function textNodes(document){
	var textArray = [];

	//get all the text of the body of the page currently on 
	var textInHtml = document.body.innerText;
	var splitText = textInHtml.split(' ');

	

	var wordCount = {

		economy:0,
		economy_a_fair_tax_system:0,
		economy_fixing_americas_infrastructure:0,
		economy_manufacturing:0,
		economy_small_business:0,
		economy_social_security_and_medicare:0,
		economy_wall_street_reform:0,
		economy_works_for_everyone:0,

    	education:0,
    	education_campus_sexual_assault:0,
    	education_college_debt:0,
    	education_early_childhood:0,
    	education_k_12:0,
    	education_technology_and_innovation:0,

    	environment: 0,
    	environment_climate_change:0,
    	environment_protecting_animals_and_wildlife:0,
    	environment_rural_communities:0,

    	equality: 0,
    	equality_campaign_finance_reform:0,
    	equality_criminal_justice_reform:0,
    	equality_immigration_reform:0,
    	equality_lgbt_rights_and_equality:0,
    	equality_racial_justice:0,
    	equality_voting_rights:0,
    	equality_womens_rights_and_opportunity:0,

    	health: 0,
    	health_addiction_and_substance_use:0,
    	health_an_end_to_alzheimers:0,
    	health_autism:0,
    	health_disability_rights:0,
    	health_health_care:0,
    	health_hiv_and_aids:0,

    	jobs: 0,
    	jobs_paid_family_and_medical_leave:0,
    	jobs_labor_and_workers_rights:0,  
    	jobs_veterans_the_armed_forces_and_their_families:0, 
    	jobs_wages:0,
    	jobs_workforce_skills_and_jobs_training:0, 

    	security: 0,
    	security_combating_terrorism:0,
    	security_gun_violence:0,
    	security_miliary_and_defense:0,
    	security_national_security:0
	}	

	for(var q = 0;q < splitText.length; q++){
		var currentText = splitText[q]

		//start Economy 
		if(currentText.match(/^(tax|taxes|Tax|Taxes)$/)){
			wordCount.economy++
			wordCount.economy_a_fair_tax_system++
		}
		if(currentText.match(/^(infrastructure|Infrastructure|roads)$/)){
			wordCount.economy++
			wordCount.economy_fixing_americas_infrastructure++
		}
		if(currentText.match(/^(manufacturing|Manufacturing|factories)$/)){
			wordCount.economy++
			wordCount.economy_manufacturing++
		}
		if(currentText.match(/^(small\sbusiness|Small\sBusiness|entrepreneur|entrepreneurs|startup|startups)$/)){
			wordCount.economy++
			wordCount.economy_small_business++
		}
		if(currentText.match(/^(social\ssecurity|Social\sSecurity|medicare|Medicare)$/)){
			wordCount.economy++
			wordCount.economy_social_security_and_medicare++
		}
		if(currentText.match(/^(wall\sstreet|Wall\sStreet)$/)){
			wordCount.economy++
			wordCount.economy_wall_street_reform++
		}
		if(currentText.match(/^(economy|Economy)$/)){
			wordCount.economy++
			wordCount.economy_works_for_everyone++
		}

		//start Education 
		if(currentText.match(/^(campus|Campus|College|college\scampus|sexual\sassault)$/)){
			wordCount.education++
			wordCount.education_campus_sexual_assault++
		}
		if(currentText.match(/^(college\sdebt|College\sDebt|student\sloans|college\scampus|Student\sLoans)$/)){
			wordCount.education++
			wordCount.education_college_debt++
		}
		if(currentText.match(/^(childhood|early\schildhood|child|children)$/)){
			wordCount.education++
			wordCount.education_early_childhood++
		}
		if(currentText.match(/^(campus|Campus|College|college\scampus|sexual\sassault)$/)){
			wordCount.education++
			wordCount.education_k_12++
		}
		if(currentText.match(/^(tech|Tech|technology|Technology|innovation)$/)){
			wordCount.education++
			wordCount.education_technology_and_innovation++
		}

		//start environment
		if(currentText.match(/^(climate|Climate|climate\schange|Climate\sChange)$/)){
			wordCount.environment++
			wordCount.environment_climate_change++
		}
		if(currentText.match(/^(animals|animal\srights|Animals|wildlife|Wildlife|Animal\sRights)$/)){
			wordCount.environment++
			wordCount.environment_protecting_animals_and_wildlife++
		}
		if(currentText.match(/^(rural|rural\scommunities|Rural|Rural\sCommunities)$/)){
			wordCount.environment++
			wordCount.environment_rural_communities++
		}

		//start Equality
		if(currentText.match(/^(campaign\sfinance|campaign\sfinancing|Campaign\sFinancing|Campaign\sFinance|donation|donations)$/)){
			wordCount.equality++
			wordCount.equality_campaign_finance_reform++
		}
		if(currentText.match(/^(criminal\sjustice|criminal\sjustice\ssystem|Criminal\sJustice|jail\stime)$/)){
			wordCount.equality++
			wordCount.equality_criminal_justice_reform++
		}
		if(currentText.match(/^(immigration\sreform|Immigration\sreform|immigrants|illegal\simmigration|border|wall)$/)){
			wordCount.equality++
			wordCount.equality_immigration_reform++
		}
		if(currentText.match(/^(lgbt|LGBT|lgbt\srights|lgbt\sequality)$/)){
			wordCount.equality++
			wordCount.equality_lgbt_rights_and_equality++
		}
		if(currentText.match(/^(racism|Racist|Racism|racial\sjustice|affirmative\saction)$/)){
			wordCount.equality++
			wordCount.equality_racial_justice++
		}
		if(currentText.match(/^(voting|voting\sprocess|voting\srights|Voting|delegates|Delegates|superdelegates|Superdelegates)$/)){
			wordCount.equality++
			wordCount.equality_voting_rights++
		}
		if(currentText.match(/^(Women|women|womens\srights|women\sequality)$/)){
			wordCount.equality++
			wordCount.equality_womens_rights_and_opportunity++
		}

		//start Health
		if(currentText.match(/^(addiction|substance\sabuse|Addiction|substance\suse|Substance\suse)$/)){
			wordCount.health++
			wordCount.health_addiction_and_substance_use++
		}
		if(currentText.match(/^(alzheimers|Alzheimers|Alzheimers\sresearch|alzheimers\sresearch)$/)){
			wordCount.health++
			wordCount.health_an_end_to_alzheimers++
		}
		if(currentText.match(/^(autism|autistic|Autistic|Autism)$/)){
			wordCount.health++
			wordCount.health_autism++
		}
		if(currentText.match(/^(disable|disability|Disable|Disability)$/)){
			wordCount.health++
			wordCount.health_disability_rights++
		}
		if(currentText.match(/^(health\scare|Health\scare|Health|health|obamacare|Obamacare)$/)){
			wordCount.health++
			wordCount.health_health_care++
		}
		if(currentText.match(/^(hiv|HIV|aids|AIDS)$/)){
			wordCount.health++
			wordCount.health_hiv_and_aids++
		}

		//start Jobs
		if(currentText.match(/^(labor|Labor|labor\srights|Labor\srights|unions|worker)$/)){
			wordCount.jobs++
			wordCount.jobs_labor_and_workers_rights++
		}
		if(currentText.match(/^(maternity|Maternity|maternity\sleave|Maternity\sleave)$/)){
			wordCount.jobs++
			wordCount.jobs_paid_family_and_medical_leave++
		}
		if(currentText.match(/^(Vets|vets|Veterans|veterans|veteran|armed\sforces|army|Army)$/)){
			wordCount.jobs++
			wordCount.jobs_veterans_the_armed_forces_and_their_families
		}
		if(currentText.match(/^(wages|Wages|minimum\swage|salary|Salary|salaries)$/)){
			wordCount.jobs++
			wordCount.jobs_wages++
		}
		if(currentText.match(/^(workforce|Workforce|skills|Skills|training|skills\straining)$/)){
			wordCount.jobs++
			wordCount.jobs_workforce_skills_and_jobs_training++
		} 


		//start Security
		if(currentText.match(/^(terrorist|Terrorist|isis|Isis|ISIS|terrorism)$/)){
			wordCount.security++
			wordCount.security_combating_terrorism++
		}
		if(currentText.match(/^(gun|Gun|guns|Guns|second\samendment|Second\samendment)$/)){
			wordCount.security++
			wordCount.security_gun_violence++
		}
		if(currentText.match(/^(military|Military|defense|Defense|national\sdefense)$/)){
			wordCount.security++
			wordCount.security_miliary_and_defense++
		}
		if(currentText.match(/^(national\ssecurity|security|Security|secure|safe|Safe)$/)){
			wordCount.security++
			wordCount.security_national_security++
		}

		//tbd
		if(currentText.match(/^(tech|startup|internet|online)$/)){
			wordCount.tech++
		}
	}

	return wordCount;
}