import { team } from '../data/portfolio';
import DuotoneTeamRoster, {
  type RosterPaletteInput,
  type TeamMember as RosterMember,
} from './ui/duotone-team-roster';

const forgePalette: RosterPaletteInput = {
  ground: '#070b08',
  deep: '#0e2117',
  hot: '#12694a',
  glow: '#1ed760',
  ink: '#ffffff',
  shadow: '#030905',
  highlight: '#d9ffe8',
};

const CRAFT: Record<string, string> = {
  alex: 'Engineering',
  priya: 'Full-stack',
  marcus: 'AI / ML',
  sofia: 'Design',
};

const rosterMembers: RosterMember[] = team.map((m) => ({
  name: m.name,
  role: m.role,
  craft: CRAFT[m.id] ?? m.role,
  bio: m.bio,
  photo: '/team1.jpg',
  focus: '50% 25%',
}));

export default function Team() {
  return (
    <DuotoneTeamRoster
      members={rosterMembers}
      eyebrow="Meet"
      title={'The\nteam'}
      intro="A small, senior crew - product engineering, AI and design under one roof."
      cta={{ label: 'Start a project', href: '#contact' }}
      secondaryCta={{ label: 'See our work', href: '#originals' }}
      palette={forgePalette}
      columns={4}
      driftSeconds={12}
      height="88svh"
      fontFamily="'Figtree', 'Helvetica Neue', Helvetica, Arial, sans-serif"
      stretch={1.08}
      uppercase
    />
  );
}
