/* eslint-disable react/prop-types */
const Header = ({ search, onChange, setType }) => {

	return (
		<header>
			<div className="filters">
				<div className="search">
					<input
						type="text"
						value={search}
						onChange={onChange}
						placeholder="Search"
					/>
				</div>
				<div className="sort">
					<select onChange={(e) => setType(e.target.value)}>
						<option value="users">User</option>
						<option value="repositories">Repo</option>
					</select>
				</div>
			</div>
		</header>
	);
};

export default Header;
