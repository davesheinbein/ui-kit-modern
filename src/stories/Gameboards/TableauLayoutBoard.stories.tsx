import { TableauLayoutBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/TableauLayoutBoard',
	component: TableauLayoutBoard,
};

export const Basic = () => (
	<TableauLayoutBoard
		cards={[{ label: 'Tableau1' }, { label: 'Tableau2' }]}
	/>
);
