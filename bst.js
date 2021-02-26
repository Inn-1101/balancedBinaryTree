(function(){
    function Node(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }

    Node.prototype.buildTree = function(arr, start, end){
        start = 0;
        end = arr.length - 1;
         if (end < start) {
            return null;
        }
        ///The middle of the array
        let mid = Math.floor((start + end) / 2);

        // Root is a middle element
        const root = new Node(arr[mid]);
        
        root.left = this.buildTree(arr, start, mid - 1);
        root.right = this.buildTree(arr, start, mid + 1);

    }

    let arr = [8, 10, 12, 5, 3, 6, 21, 11, 2];
    let bst = new Node();
    bst.buildTree(arr);
    console.log(bst)
})()