export const tabsObj = {
	home: 'Home',
	services: 'Our Services',
	studies: 'Case Studies',
	about: 'About Us',
	contact: 'Contact'
};

export const heroText: Record<string, { title: string; description: string }> = {
	home: {
		title: 'Empowering Your Business for a Sustainable Future...',
		description:
			'We empower businesses, organizations, and communities to achieve sustainability goals through innovative yet practical solutions tailored to their unique challenges.'
	},
	services: {
		title: 'Our Services',
		description:
			'We provide a comprehensive range of sustainability consulting services designed to help clients comply with regulations, reduce environmental impact, and capture new opportunities'
	},
	studies: {
		title: 'Case Studies',
		description:
			'Explore our portfolio of successful projects that demonstrate our expertise in sustainability consulting and the tangible benefits we deliver to our clients.'
	},
	about: {
		title: 'Who We Are',
		description:
			'P&E Consulting LLC is a sustainability-focused firm dedicated to guiding clients toward environmentally responsible practices that also deliver measurable business value. Founded by professionals with international experience across engineering, business, and sustainability, we blend technical knowledge with practical solutions.'
	},
	contact: {
		title: 'Get in Touch',
		description:
			'We would love to hear from you! Whether you have questions about our services, want to discuss a potential project, or just want to say hello, feel free to reach out.'
	}
};

// export const services = {
// 	'Life Cycle Assessments (LCA)':
// 		'Analyze the environmental impact of your products or services from creation to disposal to make informed, sustainable decisions.',
// 	'Sustainability Audits':
// 		'Identify wasteful practices, environmental risks, and opportunities for improvement in your operations.',
// 	'Green Compliance Support':
// 		'Guidance to achieve certifications like ISO 14001 and GRI standards, enhancingyour credibility and marketability.',
// 	'Custom Sustainability Plans':
// 		'Develop tailored environmental strategies to integrate sustainability seamlessly into your business model.',
// 	'Packaging &amp; Materials Consultation':
// 		'Explore alternatives to single-use plastics and harmful materials to reduce your environmental footprint.',
// 	'Policy &amp; Grant Guidance':
// 		'Support for local and government green initiatives, including grant application assistance and policy development.',
// 	'Carbon Footprint Assessment':
// 		'Measure and understand your business&#39;s carbon footprint to set achievable reduction targets.'
// };

export const services = {
	'Life Cycle Assessments (LCA)': {
		image: 'LifeCycleAssessments.jpg',
		description_text: [
			'Evaluate the environmental footprint of products, processes, or services from cradle to grave.',
			'Compare alternative materials, technologies, or designs to identify the most sustainable choice.',
			'Provide quantified insights for decision-making, certifications, or marketing claims.'
		]
	},
	'Environmental & Sustainability Audits': {
		image: 'EnvironmentalSustainabilityAudits.jpg',
		description_text: [
			'On-site or remote assessments of energy, water, and material usage.',
			'Identification of inefficiencies and opportunities for cost reduction.',
			'Benchmarking against industry best practices and regulatory standards.'
		]
	},
	'Carbon Footprint & GHG Accounting': {
		image: 'CarbonFootprintGHGAccounting.jpg',
		description_text: [
			'Scope 1, 2, and 3 emissions reporting.',
			'Aligned with GHG Protocol and ISO standards.',
			'Roadmaps for emission reduction, offsetting, and eventual net-zero planning.'
		]
	},
	'Green Compliance & Certifications': {
		image: 'GreenComplianceCertifications.jpg',
		description_text: [
			'Guidance on ISO 14001, ISO 50001, and other environmental management frameworks.',
			'Environmental Impact Assessment (EIA) preparation and support.',
			'Policy and compliance alignment for local, state, and federal requirements.'
		]
	},
	'Circular Economy & Resource Efficiency': {
		image: 'CircularEconomyResourceEfficiency.jpg',
		description_text: [
			'Strategies to minimize waste and extend material lifecycles.',
			'Consultation on packaging, recycling alternatives, and closed-loop systems.',
			'Pilot projects for repurposing materials into new product streams.'
		]
	},
	'Policy, Grants & Strategic Guidance': {
		image: 'PolicyGrantsStrategicGuidance.jpeg',
		description_text: [
			'Advisory for businesses and municipalities pursuing sustainability grants or incentives.',
			'Development of ESG strategies and sustainability roadmaps.',
			'Tailored presentations, training, and stakeholder engagement sessions.'
		]
	}
	// 'Carbon Footprint Assessment': {
	// 	image: '',
	// 	description_text:
	// 		"Measure and understand your business's carbon footprint to set achievable reduction targets."
	// }
};

export const caseStudies = {
	'Water Contamination Mapping Using GIS (Obuasi, Ghana)': {
		colour: 'bg-teal-50',
		image: null,
		description_text: [
			'Conducted a spatial analysis of heavy water contamination in affected regions, using GIS and photogrammetry to identify pollution pathways and assess risks to communities. The study demonstrated the role of geospatial data in water management and public health monitoring.'
		]
	},
	'Life Cycle Assessment of Building Materials': {
		colour: 'bg-orange-50',
		image: null,
		description_text: [
			'Completed a full cradle-to-grave LCA comparing concrete, brick, and structurally insulated panels (SIPs) for single-family housing. The research highlighted the environmental trade-offs of each material, identifying pathways to more sustainable housing construction.'
		]
	},
	'Bowers Rentals Project (Ongoing, P&E Consulting)': {
		colour: 'bg-blue-50',
		image: null,
		description_text: [
			'Currently leading data collection for a sustainability report covering 150+ rental units (single-family and apartments). The study evaluates energy and water consumption trends, compliance, and opportunities for future sustainability integration.'
		]
	},
	'Corporate Sustainability Experience (Neumann Project)': {
		colour: 'bg-red-50 bg',
		image: null,
		description_text: [
			'Worked on a corporate initiative integrating sustainability practices into a manufacturing firm’s operations. Focus areas included resource efficiency, waste reduction strategies, and staff engagement in green practices.'
		]
	},
	'Circular Economy Pilot Project': {
		colour: 'bg-purple-50',
		image: null,
		description_text: [
			'Designed and implemented a pilot initiative exploring material reuse and recycling opportunities. The project aimed at reducing resource inputs while improving environmental performance.'
		]
	}
};

export const people = [
	{
		name: 'Prince Pappoe',
		title: 'Founder & Principal Consultant',
		image: 'Pappoe.jpg',
		bio: [
			'Prince is the founder and principal consultant at P&E Consulting LLC. With a background in environmental engineering and international experience, he brings a unique blend of technical expertise and practical business acumen to the firm.'
		]
	},
	{
		name: 'Emmanuel Adu-Ohene',
		title: 'Sustainability Analyst',
		image: 'Ohene.jpg',
		bio: [
			'Ohene is a sustainability analyst at P&E Consulting LLC. He specializes in environmental policy and has a strong background in data analysis and project management.'
		]
	}
];

export const about = {
	'Who We Are': [
		'P&E Consulting LLC is a sustainability-focused firm dedicated to guiding clients toward environmentally responsible practices that also deliver measurable business value. Founded by professionals with international experience across engineering, business, and sustainability, we blend technical knowledge with practical solutions.'
	],
	'Our Mission': [
		'Our mission is to support organizations in embedding sustainability into their core operations, ensuring compliance, efficiency, and long-term resilience.'
	],
	'Our Vision': [
		'We envision a sustainable future achieved through innovative, practical, and nature-inspired solutions that are thoughtfully customized to each client’s needs.'
	],
	'Our Values': [
		'Integrity & Transparency',
		'Scientific Rigor & Practical Application',
		' Collaboration & Inclusivity',
		'Long-Term Impact'
	]
};

export const aboutImages = {
	'Who We Are': 'whoweare.png',
	'Our Mission': 'ourmission.png',
	'Our Vision': 'ourvision.png',
	'Our Values': 'ourvalues.png'
};
