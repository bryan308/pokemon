"use client"

import * as React from "react"
import { Flag, Globe, House, LayoutGridIcon } from "lucide-react"

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { ModeToggle } from "../mode-toggle"
import { Link } from "react-router-dom"

const singleItems = [
	{
		title: "Home",
		url: "/",
		icon: House,
	},
	{
		title: "All Cards",
		url: "/all-cards",
		icon: LayoutGridIcon,
	},
]

const cardData = [
	{
		title: "English",
		icon: Globe,
		sets: [
			"SV08: Surging Sparks",
			"SV07: Stellar Crown",
			"SV06: Twilight Masquerade",
			"SV05: Temporal Forces",
			"SV04: Paradox Rift",
			"SV03: Obsidian Flames",
			"SV: Shrouded Fable",
			"SV: Scarlet & Violet 151",
			"SV: Paldean Fates",
		],
	},
	{
		title: "Japanese",
		icon: Flag,
		sets: [
			"SV7A: Paradise Dragona",
			"SV7: Stellar Miracle",
			"SV6A: Night Wanderer",
			"SV6: Transformation Mask",
			"SV5M: Cyber Judge",
			"SV5K: Wild Force",
			"SV5A: Crimson Haze",
			"SV-P Promotional Cards",
			"SV: Ancient Koraidon ex Starter Deck & Build Set",
		],
	},
]

const data = {
	navMain: cardData.map((card) => ({
		title: card.title,
		url: "#",
		icon: card.icon,
		isActive: card.title === "English",
		items: card.sets.map((set) => ({
			title: set,
			url: `/sets/?set=${set.replace(/[^a-zA-Z0-9]/g, "_")}&language=${card.title}`,
		})),
	})),
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar
			variant="floating"
			collapsible="icon"
			{...props}
		>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							size="lg"
							asChild
						>
							<Link to="/">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary/50 text-sidebar-primary-foreground">
									{/* <GalleryVerticalEnd className="size-4" /> */}
									<img
										src="/pokeball.png"
										width={16}
										height={16}
										className="size-4"
									/>
								</div>
								<div className="flex flex-col gap-0.5 leading-none">
									<img
										src="/title.png"
										// width={16}
										height={16}
										className="max-h-8"
									/>

									{/* <span className="font-semibold">TCG TOOL</span> */}
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			{/* <SidebarHeader>
			</SidebarHeader> */}
			<SidebarContent>
				<NavMain
					items={data.navMain}
					singleItems={singleItems}
				/>
				{/* <NavProjects projects={data.projects} /> */}
			</SidebarContent>
			<SidebarFooter>
				<ModeToggle />
				{/* <NavUser user={data.user} /> */}
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}
