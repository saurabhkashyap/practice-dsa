let priorityQueue = function () {
    let items = [];

    this.print = function () {
        console.log(items.toString())
    }

    this.isEmpty = function () {
        return items.length === 0;
    }

    /**
     * if the priority of the item(item[1]) greater than any existing priority then it will be added that position
     * by splice(index_to_add, number_of_element_to_remove, item_to_add)
     * else will be added at the end
     * @param item
     */
    this.enqueue = function (item) {
        if (this.isEmpty()) {
            items.push(item);
        } else {
            let isAdded = false;
            for (let i = 0; i < items.length; i++) {
                if (item[1] < items[i][1]) {
                    items.splice(i, 0, item);
                    isAdded = true;
                    break;
                }
            }
            if (!isAdded) {
                items.push(item);
            }
        }
    }

    /**
     * shift() removes the first item of an array.
     * changes the original array.
     * returns the shifted element.
     * @returns {T}
     */
    this.dequeue = function () {
        let value = items.shift();
        return value[0];
    }
}

const pq = new priorityQueue();
pq.enqueue(['Beau Carnes', 5]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
pq.print();
pq.dequeue();
pq.print();