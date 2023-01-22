module.exports = async function (context, myQueueItem) {
    context.log('JavaScript queue trigger function processed work item', myQueueItem);
    
    context.bindings.employeeDocument = JSON.stringify([
        {
            "id": Date.now() + '',
            "message": myQueueItem
        }
    ]);
};