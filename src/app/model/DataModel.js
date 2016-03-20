module.exports = {
	
	Config : {
		PI_url: "/pdf/pi.aspx",
		PI_open_function: "",
		close_function: "destroyIC",
		footer_function: "leaveSite",
		privacy_url: "",
		legal_url: "",
		
		share: "Already on ABILIFY? Share Your Story",
		share_over: "Share your story",
		share_url: "http://www.abilify.com/story/mdd/sign-up.aspx",
				
		stories: [{
			heading: "Kalene's Story",
			header_image: "images/hdr-kalenes-story.jpg",
			subheading: "Kalene still had depressive symptoms even though she was taking an antidepressant. Then she and her doctor decided to try adding ABILIFY® (aripiprazole). Watch Kalene's story here.",
									
			chapters: [{
				id: "video1",
				title: "I'M KALENE (05:19)",
				duration: 319,
				video: [
					{src: "video/01_Kalene_OPEN.f4v", type:"video/f4v"},
					{src: "video/01_Kalene_OPEN.f4v", type:"video/mp4"}	],
				reference_copy: "Treating Depression When Your Antidepressant Alone Isn't Enough: A Patient's Guide.",
				reference_url: "http://www.abilify.com/pdf/treating-depression-hcp.aspx"
			},
			{
				id: "video2",
				title: "WHY AM I STILL SAD? (01:10)",
				duration: 70,
				video: [
					{src: "video/02_Kalene_AWARENESS.f4v", type:"video/f4v"},
					{src: "video/02_Kalene_AWARENESS.f4v", type:"video/mp4"}	],
				reference_copy: "Talking to Your Healthcare Professional:Tips and talking points to help you have a productive conversation with your healthcare professional.",
				reference_url: "http://www.abilify.com/pdf/MDD-Dr-discussionRevised.aspx"
			},
			{
				id: "video3",
				title: "HOW I STAYED MOTIVATED (01:39)",
				duration: 99,
				video: [
					{src: "video/03_Kalene_Motivation.f4v", type:"video/f4v"},
					{src: "video/03_Kalene_Motivation.f4v", type:"video/mp4"}	],
				reference_copy: "Resources for Depression:These organizations provide information and support for people living with depression.",
				reference_url: "http://www.abilify.com/depression/about/depression-resources-websites.aspx"
			},
			{
				id: "video4",
				title: "WORKING WITH MY DOCTOR IS KEY (02:26)",
				duration: 146,
				video: [	
					{src: "video/04_Kalene_DocPatient.f4v", type:"video/f4v"},
					{src: "video/04_Kalene_DocPatient.f4v", type:"video/mp4"}	],
				reference_copy: "Depressive Symptom Questionnaire:Use this tool to track your symptoms so you can review them with your healthcare professional.",
				reference_url: "http://www.abilify.com/pdf/depressive_symptom_questionnaire.aspx"
			},
			{
				id: "video5",
				title: "ABILIFY + ME (01:59)",
				duration: 119,
				video: [
					{src: "video/05_Kalene_FindTreat.f4v", type:"video/f4v"},
					{src: "video/05_Kalene_FindTreat.f4v", type:"video/mp4"}	],
				reference_copy: "ABILIFY FREE trial offer (Restrictions apply): if you're an adult with unresolved symptoms of depression and taking an antidepressant, click here to see if you qualify.",
				reference_url: "https://www.abilify.com/depression/tools/sign-up.aspx"
			},
			{
				id: "video6",
				title: "IMPORTANT SAFETY INFORMATION (05:30)",
				duration: 119,
				video: [
					{src: "video/06_isi_TRACK.f4v", type:"video/f4v"},
					{src: "video/06_isi_TRACK.f4v", type:"video/mp4"}	],
				reference_copy: "ABILIFY FREE trial offer (Restrictions apply): if you're an adult with unresolved symptoms of depression and taking an antidepressant, click here to see if you qualify.",
				reference_url: "https://www.abilify.com/depression/tools/sign-up.aspx"
			}]
		}]
		
	}
};