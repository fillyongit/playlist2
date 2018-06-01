<?php 
namespace App\Service;

use App\Entity\PlEntityInterface;

class EntityCreator {
	/**
	 * @return PlEntityInterface
	 */
	public function makeEntity($type) {
		return new $type;
	}
}