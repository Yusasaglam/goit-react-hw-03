function SearchBox({ filter, setFilter }) {
    return (
        <div className="search-box">
            <label>
                Find contacts by name
                <input
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </label>
        </div>
    );
}

export default SearchBox;
