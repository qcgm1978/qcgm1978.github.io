import unittest
from nd import *


class MyFirstTests(unittest.TestCase):

    def test_nd(self):
        self.assertEqual(ret(), 0.3989422804014327)


if __name__ == '__main__':
    unittest.main()
