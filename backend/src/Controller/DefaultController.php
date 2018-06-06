<?php
namespace App\Controller;

use App\Service\Model;
use App\Exception\CsrfException;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Translation\TranslatorInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Psr\Log\LoggerInterface;

class DefaultController extends Controller
{
	private $logger;
	
	private $translator;
	
	private $session;
	
	public function __construct(
		LoggerInterface $logger,
		TranslatorInterface $translator,
		SessionInterface $session
	) {
		$this->logger = $logger;
		$this->translator = $translator;
		$this->session = $session;
		
		//$this->get('twig')->addGlobal('is_test', $isTest);
	}
	
    public function index(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/home.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
            // 'entries' => array(array('key' => '1', 'value' => '<script>alert("sto cercando di fregarti.");</script>ciao'))
        ]);
    }
    
    public function admin(Request $request)
    {
        // replace this example code with whatever you need
        // $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'Unable to access this page!');
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_REMEMBERED');
        
//         if (!$this->get('security.authorization_checker')->isGranted('IS_AUTHENTICATED_FULLY')) {
//             throw $this->createAccessDeniedException();
//         }
        
        // $user = $this->getUser();
        
        return $this->render('default/admin.html.twig');
        
        // return new Response('<html><body>Admin page! Hi ' . $user->getUsername() . '</body></html>');
    }
    
    public function list(Request $request, 
    		Model $model,
    		$what = 'songs', 
    		$howMany = 100)
    {
    	$this->logger->info('listAction -> ' . $what . ' ' . $howMany);

    	// print $this->getParameter('database_name');

    	$collection = $model->getCollection('App:Artist');
    	foreach($collection as $row) {
    	    // Ogni $row è un oggetto di tipo AbstractEntity
    	    // che implementa l'interfaccia JsonSerializable e implementa
    	    // il metodo jsonSerialize.
    	    $data[] = json_encode($row);
    	}
    	return $this->json($data);

    	// replace this example code with whatever you need
//     	return $this->render('default/'.$what.'.html.twig', [
//     		'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
//     		// 'title' => $this->translator->trans('title.'.$what),
//     		// 'data' => $data
//     	]);
    }
    
    public function entity(Model $model, $what, $id) {
    	try {
    		$data = $model->getEntity('App:Artist', $id);
    	} catch (\Exception $e) {
    		$data['error'] = $this->translator->trans($e->getMessage());
    	}
    	return $this->json($data);
    }
    
    public function saveEntity(Request $request, Model $model, $what, $id = 0) {
    	try {
    		$data = $request->request->all();
    		if ($this->isCsrfTokenValid('grid', $data['token'])) {
    			$data = $model->saveEntity('App:Artist', $id, $data);
    		} else {
    			throw  new CsrfException($this->translator);
    		}
    	} catch (\Exception $e) {
    		$data['error'] = $this->translator->trans($e->getMessage());
    	}
    	return $this->json($data);
    }
    
    public function liveSearch(Request $request, Model $model, $what) {
    	$data = array();
    	if ($this->isCsrfTokenValid('grid', $request->request->get('token'))) {
    		$collection = $model->getCollection('App:Record', $request->request->get('search'));
    		foreach($collection as $row) {
    			// Ogni $row è un oggetto di tipo AbstractEntity 
    			// che implementa l'interfaccia JsonSerializable e implementa
    			// il metodo jsonSerialize.
    		    $data[] = json_encode($row);
    		}
    	} else {
    		throw new CsrfException($this->translator);
    	}

    	return $this->json($data);
    }
}
