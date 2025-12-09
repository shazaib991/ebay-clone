const columns = [
	{
		title: "Buy",
		links: [
			"Registration",
			"Bidding & buying help",
			"Stores",
			"Creator Collections",
			"eBay for Charity",
			"Charity Shop",
			"Seasonal Sales and events",
			"eBay Gift Cards",
		],
	},
	{
		title: "Sell",
		links: ["Start selling", "How to sell", "Business sellers", "Affiliates"],
	},
	{
		title: "eBay companies",
		links: ["TCGplayer"],
	},
	{
		title: "About eBay",
		links: [
			"Company info",
			"News",
			"Deferred Prosecution Agreement with District of Massachusetts",
			"Investors",
			"Careers",
			"Diversity & Inclusion",
			"Global Impact",
			"Government relations",
			"Advertise with us",
			"Policies",
			"Verified Rights Owner (VeRO) Program",
			"eCI Licenses",
		],
	},
	{
		title: "Help & Contact",
		links: ["Seller Center", "Contact Us", "eBay Returns", "eBay Money Back Guarantee"],
	},
	{
		title: "Tools & apps",
		links: ["Developers", "Security center", "Site map"],
	},
	{
		title: "Community",
		links: ["Announcements", "eBay Community", "eBay for Business Podcast"],
	},
];

const socialLinks = [
	{label: "Facebook", icon: "f"},
	{label: "X (Twitter)", icon: "𝕏"},
];

const legalLinks = [
	"Accessibility",
	"User Agreement",
	"Privacy",
	"Consumer Health Data",
	"Payments Terms of Use",
	"Cookies",
	"CA Privacy Notice",
	"Your Privacy Choices",
	"AdChoice",
];

export const Footer = () => {
	return (
		<footer className="border-t border-gray-200 bg-white text-sm text-gray-700">
			<div className="mx-auto w-full max-w-6xl px-4 py-12 space-y-10">
				<div className="grid gap-10 md:grid-cols-3 lg:grid-cols-7">
					{columns.map((section) => (
						<div key={section.title} className="space-y-3">
							<h3 className="text-base font-semibold text-gray-900">{section.title}</h3>
							<ul className="space-y-2 leading-relaxed">
								{section.links.map((link) => (
									<li key={link} className="cursor-pointer text-gray-700 transition-colors hover:text-gray-900">
										{link}
									</li>
								))}
							</ul>
						</div>
					))}

					<div className="space-y-3">
						<h3 className="text-base font-semibold text-gray-900">Stay connected</h3>
						<ul className="space-y-2">
							{socialLinks.map((social) => (
								<li
									key={social.label}
									className="flex items-center gap-3 cursor-pointer text-gray-700 transition-colors hover:text-gray-900"
								>
									<span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-base font-semibold text-gray-800">
										{social.icon}
									</span>
									<span>{social.label}</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="flex flex-col gap-4 border-t border-gray-200 pt-6 md:flex-row md:items-center md:justify-between">
					<div className="space-y-2">
						<p className="text-gray-600">Copyright © 1995-2025 eBay Inc. All Rights Reserved.</p>
						<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-700">
							{legalLinks.map((item, idx) => (
								<span
									key={item}
									className={`cursor-pointer transition-colors hover:text-gray-900 ${
										idx === legalLinks.length - 1 ? "" : "after:mx-4 after:text-gray-400 after:content-['|']"
									}`}
								>
									{item}
								</span>
							))}
						</div>
					</div>

					<div className="flex items-center gap-3">
						<div className="flex items-center gap-2 rounded border border-gray-300 px-3 py-2 text-gray-800">
							<span className="text-lg">🇺🇸</span>
							<select
								aria-label="Select country"
								className="bg-transparent text-sm outline-none"
								defaultValue="United States"
							>
								<option>United States</option>
								<option>Canada</option>
								<option>United Kingdom</option>
								<option>Australia</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
