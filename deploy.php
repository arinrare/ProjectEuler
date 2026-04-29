<?php
// ... (Keep your signature verification logic here) ...

// Create a flag file
file_put_contents('../../.deploy_trigger', 'triggered');
echo "Deployment queued.";
?>