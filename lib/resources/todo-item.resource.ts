export interface ITodoItem {
    /**
     * The item's unique identifier.
     * If undefined at the time of creation, a new UUID will be created.
     */
    _id?: string;

    /**
     * The item's descriptive name (e.g. 'Do the dishes').
     */
    name: string;

    /**
     * The date the item was created.
     * If undefined at the time of creation, the current date will be used.
     */
    date?: string;
}