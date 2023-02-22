/**
 * Set: Set are a collection of sequential and unique elements, this structure doesn’t allow adding duplicate values
 * @returns {PublicSet}
 */
function mySet() {

    class PublicSet {
        constructor() {
            this.items = [];
        }

        /**
         * To check if the required item is inside our set
         * @param item
         * @returns {boolean}
         */
        has(item) {
            return this.items.indexOf(item) !== -1;

            // ADDITIONAL WAYS
            // return this.items.hasOwnProperty(item);
            // return this.items[item] !== 'undefined';
        }


        /**
         * this method will add an element to the set
         * first, we check if this item was not added before, if don’t we add this list to our set items
         * @param item
         * @returns {boolean}
         */
        add(item) {
            if (this.has(item)) {
                return false;
            }
            this.items.push(item);
            return true
        }

        /**
         * first, we need to check if the item was added before, so if we found the item we remove it
         * @param item
         * @returns {boolean}
         */
        delete(item) {
            if (!this.has(item)) {
                return false;
            }
            delete this.items[item];

            // ADDITIONAL WAYS
            // let index = this.items.indexOf(item);
            // items.splice(index, 1);
            return true;
        }

        /**
         * clear all items from a set
         */
        clear() {
            this.items = {};
        }

        /**
         * size of the set
         * @returns {*}
         */
        size() {
            return this.items.length;
        }

        /**
         * all values in the set
         * @returns {{}}
         */
        values() {
            return this.items;
        }

        /**
         * Get the values from both sets.
         * Create a new union empty set where we will store the values.
         * Traverse all elements from the first set and add all them in the union set.
         * Traverse all elements from the second set and add all them in the union set.
         * @param secondSet
         * @returns {PublicSet}
         */
        union(secondSet) {
            let unionSet = new mySet();
            let firstSetValues = this.values();
            let secondSetValues = secondSet.values();

            // firstSetValues.forEach(value => {
            //     unionSet.add(value);
            // });
            // secondSetValues.forEach(value => {
            //     unionSet.add(value)
            // });

            // USING SPREAD OPERATOR
            let allSetValues = [...firstSetValues, ...secondSetValues];
            allSetValues.forEach(value => {
                unionSet.add(value)
            })

            return unionSet;
        }

        /**
         * Get the values from both Sets.
         * Create a new Set where we will store the values.
         * Traverse all elements from the first set checking if the value is also present in the second set,
         * when is present in both we add this value in intersection set.
         * Do the same with the second set
         * @param secondSet
         * @returns {PublicSet}
         */
        intersection(secondSet) {
            let intersectionSet = new mySet();

            this.values().forEach(value=> {
                if (secondSet.has(value)){
                    intersectionSet.add(value);
                }
            });
            secondSet.values().forEach(value=> {
                if (this.has(value)){
                    intersectionSet.add(value);
                }
            });

            // USING SPREAD OPERATOR
            // let allSetValues = [...firstSetValues, ...secondSetValues];
            // allSetValues.forEach(value => {
            //     this.has(value) && secondSetValues.has(value) && intersectionSet.add(value)
            // })

            return intersectionSet;
        }

        /**
         * Traverse all elements from the first set checking if the value is also present in the second set,
         * when is not present in the second we add this value in difference set.
         * @param secondSet
         * @returns {PublicSet}
         */
        difference(secondSet) {
            let differentSet = new mySet();

            this.values().forEach(value=> {
                if (!secondSet.has(value)){
                    differentSet.add(value)
                }
            });

            return differentSet;
        }

        /**
         * Traverse all elements from the second set checking if the value is also present in the first set and return true
         * if all values match this condition or false if don’t.
         * @param secondSet
         * @returns {boolean}
         */
        subset(secondSet) {
            this.values().forEach(value=> {
                if (!secondSet.has(value)){
                    return false;
                }
            });
            return true;
        }
    }

    return new PublicSet();
}

const setA = new mySet();
const setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());
console.log(setA.union(setB).values());

const setC = new Set();
const setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values())
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));